import { ComponentProps, forwardRef } from 'react'
import { Text as RNText, Platform, Linking } from 'react-native'
import { styled, StyledProps } from 'nativewind'
import { motify } from 'moti'

export const Text = styled(RNText)

/**
 * You can use this pattern to create components with default styles
 */
export const P = styled(RNText, 'text-base')
P.defaultProps = {
  accessibilityRole: 'text',
}
export const MotiP = motify(P)()
/**
 * Components can have defaultProps and styles
 */
export const H1 = styled(RNText, 'text-3xl font-bold')
H1.defaultProps = {
  accessibilityRole: 'header',
}

/**
 * This is a more advanced component with custom styles and per-platform functionality
 */
export interface AProps extends ComponentProps<typeof Text> {
  href?: string
  target?: string
}

export const A = forwardRef<RNText, StyledProps<AProps>>(function A(
  { className = '', href, target, ...props },
  ref
) {
  const nativeAProps = Platform.select<Partial<AProps>>({
    web: {
      href,
      target,
    },
    default: {
      onPress: (event) => {
        props.onPress && props.onPress(event)
        if (Platform.OS !== 'web' && href !== undefined) {
          Linking.openURL(href)
        }
      },
    },
  })

  return (
    <Text
      accessibilityRole='link'
      className={`text-blue-500 hover:underline ${className}`}
      {...props}
      {...nativeAProps}
      ref={ref}
    />
  )
})
