import type { Meta, StoryObj } from "@storybook/react";
import AppLink from "./app-link";

const meta: Meta<typeof AppLink> = {
  title: "Atoms/AppLink",
  component: AppLink,
  parameters: {},
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Default: Story = {
  args: {
    to: "#",
    children: "click me!",
  },
};
