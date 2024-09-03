import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys)

  const baseStyle = definePartsStyle({
    // define the part you're going to style
    container: {
      // ...`
      border: '1px',
      borderRadius: '48px'
    },
    thumb: {
      bg: 'white',
      _checked: {
        bg: '#144EE3'
      }
    },
    track: {
      bg: '#181E29',
      _checked: {
        bg: '#181E29',
      },
    },
  })

  export const switchTheme = defineMultiStyleConfig({ baseStyle })