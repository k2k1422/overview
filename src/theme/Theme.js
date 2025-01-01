import { createTheme } from '@mui/material';


const Theme = createTheme({
    palette: {
      mode: 'light', // Set theme mode to light (black and white)
      primary: {
        main: '#000000', // Set primary color to black
      },
      secondary: {
        main: '#ffffff', // Set secondary color to white
      },
    },
  });

export default Theme;