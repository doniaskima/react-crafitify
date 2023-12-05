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
        
        <Card.Body>Card Body Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut voluptatem optio libero?</Card.Body>
   
      </Card>
    </div>
    </div>
  )
}

export default CardComponent