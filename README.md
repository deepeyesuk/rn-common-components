# rn-components

React Native Shared Components V1

## Installation

```sh
npm install rn-components
```

## Usage

```js
import { LabelInput } from 'rn-components'

// ...
// Basic Input on readonly mode
<LabelInput
  isRequired
  label='Note'
  defaultValue={'initial value'}
  readonly
/>

// changable with a helper message
const [name, setName] = useState<string>('')
<FloatingLabelInput
  isRequired
  label='Name'
  helperText={renderHelpText()}
  defaultValue={'initial value'}
  errorMessage={'error message on an validation failed'}
  onChangeText={(name: string) => {
    setCode(name)
    setValidation({ ...validation, name: '' })
  }}
  autoCapitalize='none'
/>

// Secret Input with a right element
<FloatingLabelInput
  isRequired
  label="Password"
  type={showPassword ? 'text' : 'password'}
  defaultValue={props.password}
  errorMessage={props.errorMessage}
  onChangeText={(password: string) => {
    props.setPassword(password.trim())
    props.setErrorMessage('')
  }}
  autoCapitalize="none"
  testID={props.testID}
  InputRightElement={
    <IconButton
      mr='1'
      variant='unstyled'
      icon={
        <Icon
          size='4'
          color='coolGray.500'
          as={Entypo}
          name={showPassword ? 'eye' : 'eye-with-line'}
        />
      }
      onPress={() => {
        setShowPassword(!showPassword)
      }}
    />
  }
/>

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with 
- [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
- [UI Component of NativeBase](https://nativebase.io/)