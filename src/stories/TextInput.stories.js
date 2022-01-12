import { TextInput } from "../components"

export default {
  title: 'Matter-UI/TextInput',
  component: TextInput
}

const Template = args => <TextInput {...args} />

export const Default = Template.bind({})
Default.args = {
  placeholder:'deafult',
  size:'md',
  className:''
}

export const FirstName = () => <TextInput placeholder='First Name' size='sm' />
export const LastName = () => <TextInput placeholder='Last Name' size='sm' />
export const Email = () => <TextInput placeholder='Email' size='md' />
export const Location = () => <TextInput placeholder='Location' size='md' />