import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Button } from "../src";

export default {
    title: "Componentes/Button",
    component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = () => <Button />

export const Primario = Template.bind({})