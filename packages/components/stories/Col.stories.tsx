import React from 'react';
import { Story, Meta } from '@storybook/react';
import Col from '../Layout/Col'; 


export default {
    title: 'Components/Layout/Col',
    component: Col,
  } as Meta;
  
  interface ColProps {
    grid: string;
  }
  
  const Template: Story<ColProps> = (args) => (
    <div>

      <Col {...args} grid="col-6">
        <p>Column 1 Content</p>
      </Col>
      <Col {...args} grid="col-4">
        <p>Column 2 Content</p>
      </Col>
      <Col {...args} grid="col-2">
        <p>Column 3 Content</p>
      </Col>
      <Col {...args} grid="col-2">
        <p>Column 3 Content</p>
      </Col>
          <Col {...args} grid="col-2">
        <p>Column 3 Content</p>
      </Col>
    </div>
  );
  
  export const DefaultCol = Template.bind({});
  DefaultCol.args = {
    children: (
      <>
        <p>Default Column 1 Content</p>
        <p>Default Column 2 Content</p>
        <p>Default Column 3 Content</p>
      </>
    ),
    grid: 'your-grid-classes',
  };
 