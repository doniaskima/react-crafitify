// Modal.stories.tsx
import React, { useState } from 'react';
import { Meta, Story } from  "@storybook/react";
import { Modal, ModalProps } from '../Modals';
import { ModalGroup } from '../Modals/ModalGroup/ModalGroup';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={handleOpenModal}>Open Modal</button>
      <Modal {...args} open={isOpen} onClose={handleCloseModal}>
        <div>
          <h2>Modal Content</h2>
          <p>This is the modal content.</p>
          <button onClick={handleCloseModal}>Close Modal</button>
        </div>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
 
};

 
export const ModalGroupExample: Story = () => {
  return (
    <ModalGroup>
      <button>Open Modal 1</button>
   
    </ModalGroup>
  );
};
