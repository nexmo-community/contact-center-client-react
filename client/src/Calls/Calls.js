import React, { Component } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import nexmoClient from 'nexmo-client';
import CONFIG from '../config.json';

class Calls extends Component {
  state = {
    application: null,
    conversation: null,
    call: null,
    direction: null, 
    message: "Waiting for a call",
    connected: false
  };

  callStatus = {
    started: { message: "Call started", connected: false },
    ringing: { message: "Call ringing", connected: true },
    answered: { message: "Call answered", connected: true },
    completed: { message: "Call completed", connected: false, direction: null },
    busy: { message: "Call busy", connected: false, direction: null },
    timeout: { message: "Call timed out", connected: false, direction: null },
    unanswered: { message: "Call not answered", connected: false, direction: null },
    rejected: { message: "Call rejected", connected: false, direction: null },
    failed: { message: "Call failed", connected: false, direction: null }
  };

  componentWillMount() {
    let nexmo = new nexmoClient({
      debug: true
    });
    nexmo.login(this.props.jwt)
      .then(application => {
        this.setState({
          application: application
        });
        application.on("member:call", (member, call) => {
          this.setState({
            direction: call.direction,
            call: call,
            conversation: call.conversation
          });
        })
        application.on("call:status:changed", call => {
          this.setState(this.callStatus[call.status])
        })
        application.on('member:joined', (member, event) => {
          application.getConversation(event.cid).then((conversation) => {
            if (this.state.conversation) {
              this.closeConversation();
            }
            this.setState({
              conversation: member.conversation
            })

            this.state.conversation.on('member:left', this.state.conversation.id, (from, event) => {
              if (this.state.conversation.me.id === from.id) {
                this.closeConversation();
              }
            });
          })
        })
      })
      .catch(console.log);
  }

  closeConversation = () => {
    if (this.state.conversation) {
      this.state.conversation.releaseGroup(this.state.conversation.id);
      this.setState({
        conversation: null
      });
    }
  }

  makeCall = () => {
    if (this.state.application) {
      this.state.application.callServer(CONFIG.CALLEE_NUMBER).catch(this.genericCallError);
    }
  }

  answerCall = () => {
    if (this.state.call) {
      this.state.call.answer().catch(this.genericCallError);
    }
  }

  rejectCall = () => {
    if (this.state.call) {
      this.state.call.reject().catch(this.genericCallError);
      this.setState({
        call: null
      })
    }
  }

  hangUp = () => {
    if (this.state.call) {
      this.state.call.hangUp().catch(this.genericCallError);
      this.setState({
        call: null
      })
      this.closeConversation();
    }
  }

  genericCallError = (err) => {
    console.log(err);
    this.setState(this.callStatus["failed"]);
  }

  render() {
    let { direction, call, application, message, connected } = this.state;
    let callButton, hangUpButton, answerButton;
  
    if (!application) {
      answerButton = <Button variant="warning" block size="lg" disabled>Answer</Button>;
      hangUpButton = <Button variant="danger" block size="lg" disabled>Hang up</Button>;
      callButton = <Button variant="success" block size="lg" disabled>Call</Button>;
    } else if (call) {
      if (connected) {
        hangUpButton = <Button variant="danger" block size="lg" onClick={() => this.hangUp()}>Hang up</Button>;
        answerButton = <Button variant="warning" block size="lg" disabled>Answer</Button>;
      } else if ("inbound" === direction) {
        hangUpButton = <Button variant="danger" block size="lg" onClick={() => this.rejectCall()}>Reject</Button>;
        answerButton = <Button variant="warning" block size="lg" onClick={() => this.answerCall()}>Answer</Button>;
      } else {
        hangUpButton = <Button variant="danger" block size="lg" onClick={() => this.hangUp()}>Hang up</Button>;
        answerButton = <Button variant="warning" block size="lg" disabled>Answer</Button>;
      }

      callButton = <Button variant="success" block size="lg" disabled>Call</Button>;
    } else {
      answerButton = <Button variant="warning" block size="lg" disabled>Answer</Button>;
      hangUpButton = <Button variant="danger" block size="lg" disabled>Hang up</Button>;
      callButton = <Button variant="success" block size="lg" onClick={() => this.makeCall()}>Call</Button>;
    }

    return (
      <React.Fragment>
        <Card style={{ margin: "20vh auto 0 auto", width: '18rem' }} className="text-center">
          <Card.Body>
            <Card.Title>Make a Call</Card.Title>
            <Card.Subtitle>{message}</Card.Subtitle>
            <br />
            <Form>
              {callButton}
              {answerButton}
              {hangUpButton}
            </Form>
          </Card.Body>
        </Card>
      </React.Fragment>
    );
  }
}

export default Calls;