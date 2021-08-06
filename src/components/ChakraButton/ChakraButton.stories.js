import React from "react";
import { Button } from "@chakra-ui/react";

export default {
  title: "Chakra/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const SuccessInline = () => <Button variant="solid">Testing</Button>;

export const Success = Template.bind({});
Success.args = {
  variant: "outline",
  children: "Success",
  colorScheme: "blue",
};

Success.storyName = "ChakraButton Success";

export const Danger = Template.bind({});
Danger.args = {
  variant: "solid",
  children: "Danger",
};
