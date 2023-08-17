import { Snippet } from "../Snippet/Snippet";

export default {
  component: Snippet,
  title: "Components/Complex/Snippet",
};

export const Default = () => (
  <Snippet>npm install void-ui-library</Snippet>
);

export const WithIndicator = () => (
  <Snippet hasIndicator>npm install void-ui-library</Snippet>
);
