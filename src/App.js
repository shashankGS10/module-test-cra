import React from 'react'

import { NCAlert ,NCThemeProvider,NCAccordion,NCAccordionItem,NCAccordionHeader,NCAccordionPanel} from 'ncdesignsystem'
import {AccordionIcon,Box} from '@chakra-ui/core'

const App = () => {
  return (<NCThemeProvider>
            <NCAlert />
            <br></br>
            <NCAccordion defaultIndex={[0]} allowMultiple>
        <NCAccordionItem>
          <NCAccordionHeader>
            <Box flex="1" textAlign="left">
              Section 1 title
            </Box>
            <AccordionIcon />
          </NCAccordionHeader>
          <NCAccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </NCAccordionPanel>
        </NCAccordionItem>
      </NCAccordion>
      <NCAccordion defaultIndex={[0]} allowMultiple>
        <NCAccordionItem>
          <NCAccordionHeader>
            <Box flex="1" textAlign="left">
              Section 1 title
            </Box>
            <AccordionIcon />
          </NCAccordionHeader>
          <NCAccordionPanel pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </NCAccordionPanel>
        </NCAccordionItem>
      </NCAccordion>
        </NCThemeProvider>)
}

export default App
