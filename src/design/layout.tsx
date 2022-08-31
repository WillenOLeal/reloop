import { View as RNView } from 'react-native'
import { styled } from 'nativewind'
import { motify } from 'moti'

export const Row = styled(RNView, 'flex-row')

export const View = styled(RNView)

export const MotiView = motify(View)()
