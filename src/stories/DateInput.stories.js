import { DateInput } from "../components";

export default {
  title: "Matter-UI/DateInput",
  component: DateInput,
};

const Template = (args) => <DateInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "md",
};

export const ExtraSmall = () => <DateInput size="xs" />;
export const Small = () => <DateInput size="sm" />;
export const Medium = () => <DateInput size="md" />;
export const Large = () => <DateInput size="lg" />;
