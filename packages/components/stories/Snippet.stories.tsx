import { Snippet } from "../Snippet/Snippet";

export default {
  component: Snippet,
  title: "Components/Complex/Snippet",
};

export const Default = () => (
  <Snippet>npm install react-craftify-components</Snippet>
);

export const WithIndicator = () => (
  <Snippet hasIndicator>npm install react-craftify-components</Snippet>
);
