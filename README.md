# Matter-UI

[![matter-ui.png](https://i.postimg.cc/SRS02PFg/matter-ui.png)](https://postimg.cc/62mbFYQZ)

## How to test

You can live test our components using **Storybook**.

```bash
$ npm run storybook
```

## Available components

- TextInput
- PasswordInput
- DateInput

## How to use

For example, you can use the following code to render a `TextInput` component.`:

```javascript
import React from 'react';
import { TextInput } from 'matter-react-ui';

const App = () => {
  return (
    <TextInput
      placeholder='Enter your name'
      size='md'
    />
  );

export default App;
}
```