import React from 'react';
import Card from '../../../../packages/components/Card/Card';
import "./Card.css"
import { Button } from 'react-craftify-core';

const CardComponent = () => {
  return (
    <div>
      {/* <Card className="radius-md shadow divide-y color-slate">
        <Card.Header className="size-lg"  >
          Standard Plan
        </Card.Header>
        <Card.Body className="size-base withDivider">
          <h2  >$19.99/month</h2>
          <p  >Includes all basic features</p>
        </Card.Body>
        <Card.Footer className="size-sm"  >
          <button>Subscribe Now</button>
        </Card.Footer>
      </Card>

      <Card
        bordered={false}
        color="white"
        radius="lg"
        shadow="md"
        size="md"
        withDivider={true}
      >
            Your card content goes here 
      </Card>
      <div>
      <Card>
    <Card.Image
      alt="A beautiful image"
      caption="This is a beautiful image"
      mode="light"
      src="https://www.euractiv.com/wp-content/uploads/sites/2/2023/02/shutterstock_2212948463-1-800x450.jpg" />
 
  </Card>
      </div>
      <div>
      <Card bordered={true}>
    // ...
  </Card> */}

  {/* <Card bordered={false}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti, quos sunt non, enim accusamus quia ratione optio facilis sequi facere ab ipsa, eum nulla consequatur labore illo? Alias officia reiciendis eum architecto fuga quibusdam exercitationem dolor sapiente, nostrum perspiciatis placeat porro voluptatibus magni veritatis magnam consequuntur earum ex necessitatibus minima nam facilis ratione eius! Quidem placeat aut, ipsam aliquam natus culpa ipsa ducimus corrupti. Fugiat libero nemo quisquam molestiae necessitatibus earum itaque veritatis magnam officiis accusantium totam expedita voluptatum mollitia autem optio debitis, dolor corrupti voluptate veniam assumenda. Illum.
  </Card> */}
  
  <Card shadow="lg">
   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque praesentium omnis ipsam, maxime consectetur magnam enim cum veniam hic odit tempore delectus sint? Perferendis, sint hic! Architecto, nisi. Minima, accusantium?
  </Card>
  
 
{/* 
  <Card shadow="sm">
    // ...
  </Card>

  <Card shadow="base">
    // ...
  </Card>

  <Card shadow="md">
    // ...
  </Card>

  <Card shadow="lg">
    // ...
  </Card>

  <Card shadow="xl">
    // ...
  </Card> */}
    </div>
  );
};

export default CardComponent;
