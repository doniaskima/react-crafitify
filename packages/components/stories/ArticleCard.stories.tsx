import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import ArticleCard from "../ArticleCard";


export default {
  title: "Components/ArticleCard",
  component: ArticleCard,
} as ComponentMeta<typeof ArticleCard>;


const Template: ComponentStory<typeof ArticleCard> = (args) => (
  <ArticleCard {...args} />
);


export const Default = Template.bind({});
Default.args = {
  img: "https://media.istockphoto.com/id/813581282/photo/face-detection-and-recognition-of-man-computer-vision-and-machine-learning-concept.jpg?s=612x612&w=0&k=20&c=NoRoSp7n38vNPduP3KtvWWjwd0H7QMXQcT0hCSbVvwo=",
  category: "Computer Vision",
  title: "950+ Computer Vision Stock Photos, Pictures & Royalty-Free Images - iStock | Computer screen, Technology, Office",
  author: "Donia Skima",
  time: "2 hours ago",
};

export const WithCustomTitle = Template.bind({});
WithCustomTitle.args = {
  img: "https://media.istockphoto.com/id/1129543803/photo/futuristic-interface-concept.jpg?s=612x612&w=0&k=20&c=GVPANugmDHPkByO40NIdGJYuryM8sRPJLifnzyJhL9o=",
  category: "Category",
  title: "Custom Title",
  author: "Author",
  time: "2 hours ago",
};

export const WithoutAuthorAndTime = Template.bind({});
WithoutAuthorAndTime.args = {
  img: "https://img.freepik.com/premium-photo/circuit-cyberspace-closeup-with-neon-lights-young-adult-woman-futuristic-generate-by-ai_972969-1487.jpg",
  category: "Category",
  title: "Article Title",
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  img: "https://www.publicdomainpictures.net/pictures/530000/nahled/woman-verifying-ai-results.jpg",
  category: "Category",
  title: "Article Title",
  author: "Author",
  time: "2 hours ago",
  style: { border: "2px solid blue" },
};
