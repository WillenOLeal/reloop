import React from 'react'
import { TextInput as RNTextInput } from 'react-native'
import { styled } from 'nativewind'
import { Row, } from '@design/layout'

const TextInputBase = styled(RNTextInput)

interface Props extends React.ComponentProps<typeof TextInputBase> {}

const TextInput: React.FC<Props> = (props) => {
  return (
    <Row>
      <TextInputBase
        className='border 
        text-sm rounded-2xl 
        w-full
        px-5 py-3 bg-stale-800 
        border-gray-500  outline-none placeholder-gray-500 text-white  
        focus:border-slate-500'
        {...props}
      />
    </Row>
  )
}

export default TextInput
