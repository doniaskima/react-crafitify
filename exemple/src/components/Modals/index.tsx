import React, { useState } from 'react';
import { Button } from 'react-craftify-core';
 
 

const Modalss = () => {
 
    const [open, setOpen] = useState(false);
  return (
    <>
      <Modals size="md" open={open} onClose={() => setOpen(false)}>
       
      </Modal>

      <Button onClick={() => setOpen(true)}>Click me!</Button>
    </>
  );
};

export default Modalss;
