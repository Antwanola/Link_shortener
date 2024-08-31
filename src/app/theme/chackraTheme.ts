import { extendTheme } from "@chakra-ui/react";
import { switchTheme } from './themeUtil';

const theme = extendTheme({
  styles: {
    global: {
      // Apply styles to the entire HTML document
      "html, body": {
        bg: "#0E131E", // Set your desired background color here
        fontFamily: "'Inter', sans-serif", // Set your desired font family here
        // Default text color
        minHeight: "100%", // Ensure the background color covers the entire height
        margin: 0,
        padding: 0,
      },
      // Ensure the body takes up the full height of the viewport
      body: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      },
      "#__next": {
        flex: 1, // Make sure the Next.js root div takes up the remaining height
      },
    },
  },
});

export default  extendTheme({components:{ Switch: switchTheme}}, theme)