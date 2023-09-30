import React, { useState } from 'react';
import { Button } from 'react-craftify-core';
import {Modal} from "react-craftify-core/Modals"

 
 

const Modalss = () => {
 
    const [open, setOpen] = useState(false);
  return (
    <>
      <Modal size="md" open={open} onClose={() => setOpen(false)}>
       
      </Modal>

      <Button onClick={() => setOpen(true)}>Click me!</Button>
    </>
  );
};

export default Modalss;
