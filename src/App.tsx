
import { ThemeProvider } from '@mui/material/styles';
import Header from '../src/components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import FilterBar from './components/FilterBar/FilterBar';
import { CssBaseline } from '@mui/material';
import Cookies from './components/Cookies/Cookies';
import {theme} from '../src/theme/theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header/>
      <FilterBar/>
      <Catalog/>
      <Cookies/>
    </ThemeProvider>
  
  );
}

export default App;
