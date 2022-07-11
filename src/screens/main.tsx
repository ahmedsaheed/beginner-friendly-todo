import * as React from 'react';
import{ Text, Box, Center, VStack, themeTools, useTheme, useColorMode, useColorModeValue}
 from 'native-base'
import ThemeToggle from '../components/theme-toggle';

export default function MainScreen() {
    return (
      <Center _dark = {{bg: 'blueGray.900'}} _light ={{bg: 'blueGray.50'}} px={4} flex ={1}>
        <VStack space={5} alignItems="center">
     
      <Box>
        <Text>Hello</Text>
         </Box>
         <ThemeToggle/>
         </VStack>
      </Center>
    )
}