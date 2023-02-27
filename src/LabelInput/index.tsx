import React from 'react'
import {
  Input,
  useColorModeValue,
  FormControl,
  WarningOutlineIcon,
  VStack,
} from 'native-base'
import { ResponsiveValue } from 'native-base/lib/typescript/components/types'

type LabelInputProps = {
  defaultValue: string
  onFocus?: () => void
  onBlur?: () => void
  label: string
  readonly?: boolean
  errorMessage?: string
  onSubmitEditing?: () => void
  onPress?: () => void
  fontSize?: ResponsiveValue<
    | (string & Record<string, never>)
    | (number & Record<string, never>)
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '2xs'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
  >
  helperText?: JSX.Element | string
  type?: 'text' | 'password' | undefined
  isRequired?: boolean
  onChangeText?: (text: string) => void
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  testID?: string
  InputRightElement?: JSX.Element | JSX.Element[] | undefined
}

export function LabelInput(props: LabelInputProps) {
  const { label, readonly } = props
  const labelBGColor = useColorModeValue('#fff', '#1F2937')
  const bgColor = 'transparent'
  const fontColor = readonly ? 'coolGray.400' : 'coolGray.800'

  const isError = props.errorMessage ? true : false

  return (
    <FormControl isRequired={props.isRequired} isInvalid={isError}>
      <VStack>
        {!!label && <FormControl.Label>{label}</FormControl.Label>}
        <Input
          testID={props.testID}
          autoCorrect={false}
          flex={1}
          editable={!readonly}
          type={props.type ? props.type : 'text'}
          fontWeight='normal'
          py='3'
          px='5'
          borderRadius='4'
          backgroundColor={bgColor}
          fontSize={props.fontSize ?? 'md'}
          color={fontColor}
          _hover={{ bg: labelBGColor }}
          autoCapitalize={props.autoCapitalize}
          onSubmitEditing={() => {
            if (props.onSubmitEditing) {
              props.onSubmitEditing()
              return
            }

            if (props.onPress) {
              props.onPress()
              return
            }
          }}
          {...props}
        />
      </VStack>
      <FormControl.ErrorMessage
        marginLeft={5}
        leftIcon={<WarningOutlineIcon size='xs' />}
      >
        {props.errorMessage}
      </FormControl.ErrorMessage>
      <FormControl.HelperText marginLeft={5}>
        {props.helperText}
      </FormControl.HelperText>
    </FormControl>
  )
}
