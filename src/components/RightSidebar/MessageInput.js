import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
function MessageInput(props) {
  const { newMessageHandler } = props;
  const [message, setMessage] = useState("");
  useEffect(() => {
    // reset input value when contact component changes
    setMessage("");
  }, [setMessage, props]);

  let handleInputChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const eve = function () {
    if (message) {
      newMessageHandler(message);
    } else {
      alert("Type some message text before submitting");
    }
    setMessage("");
    // scroll to the bottom
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      eve();
    }
  };

  let handleSubmit = () => {
    eve();
  };
  
  return (
    <>
      <Row className="message-input">
        <Col xs={5} lg={5}>
          <input
            id="myInput"
            type="text"
            placeholder="Send message"
            value={message}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </Col>
        <Col xs={3} lg={4}>
          <button id="myBtn" className="send-button" onClick={handleSubmit}>
            Send
          </button>
        </Col>
      </Row>
    </>
  );
}

export default MessageInput;
