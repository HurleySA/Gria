
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../src/components/Header/Header';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#c6198f',
      light: '#D81C98',
      dark: '#920D65',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#3d086b',
      light: '#590A9D',
      dark: '#3E076D',
    },
  },
});
function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <div style={{height:"200vh"}}>

      </div>

    </ThemeProvider>
  
  );
}

export default App;
