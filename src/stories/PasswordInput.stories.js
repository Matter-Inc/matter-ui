import { PasswordInput } from "../components";

export default {
  title: "Matter-UI/PasswordInput",
  component: PasswordInput,
};

const Template = (args) => <PasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: "md",
  className: "",
  visible: false,
  placeholder: "•••••••••••••••••",
};

export const Visible = () => <PasswordInput size="xs" visible={true} />;
export const NoVisible = () => <PasswordInput size="sm" visible={false} />;
export const CustomPlaceholder = () => (
  <PasswordInput size="md" placeholder="custom" />
);
