import React from 'react'
import Card from "../../../../packages/components/Card/Card";
const CardComponent = () => {
  return (
    <div>
       <div>
      {/* Use the Card component here */}
      <Card
        bordered={true}
        color="white"
        radius="base"
        shadow="sm"
        size="base"
        withDivider={true}
      >
        {/* Content of the card */}
        
        <Card.Body>Card Body Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut voluptatem optio libero? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum vitae harum incidunt eum perspiciatis id sit dolore amet? Sit beatae suscipit ut, quia expedita voluptatum fugit est, eveniet modi nulla sapiente enim quas labore debitis repellendus sed accusantium a rerum.</Card.Body>
   
      </Card>
    </div>
    </div>
  )
}

export default CardComponent