import React from "react";
import { Button } from "react-craftify-core";
import message from "react-craftify-core/Message";
 

const MessageComponent = () => (
  <div>
    <Button
      onClick={ () => message("This is a regular message.")}
      type="primary">Regular message</Button>

    <Button
      onClick={ () => message("This is a success message.", "success") }
      type="success">Success message</Button>

    <Button
      onClick={ () => message("This is an error message.", "error") }
      type="danger">Error message</Button>

    <Button
      onClick={ () => message("This is a question message.", "question") }>Question message</Button>

    <Button
      onClick={ () => message("This is a message without icon.", "noIcon") }>Message without icon</Button>
  </div>
);

export default MessageComponent