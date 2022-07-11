import { extendTheme } from "native-base";

const config = {
    useSystemColorMode: false,
    initialColorMode: 'light',
}

const colors ={
    primary: {
        50: "#eef2f5",
        100: "#cfd9e7",
        200: "#b1c1d8",
        300: "#92A9C9",
        400: "#7491B9",
        500: "#5578AA",
        600: "#446088",
        700: "#334688",
        800: "#223044",
        900: "#111822",
         
    }
}

export default extendTheme({config, colors});