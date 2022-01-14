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

export const ExtraSmall = () => <DateInput size="xss"/>;
export const Small = () => <DateInput size="smm" />;
export const Medium = () => <DateInput size="mdd" />;
export const Large = () => <DateInput size="lgg" />;
