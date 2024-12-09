import { Route, BrowserRouter, Routes } from 'react-router-dom'

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme';
import WithSideNav from './components/app/WithSideNav';
import TwoPage from './elements/TwoPage';
import ThreePage from './elements/ThreePage';
import FirstPage from './elements/FirstPage';
import Dashboard from './elements/Dashboard';
import { AppBar, CssBaseline, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WithSideNav />}>
          <Route path="/" element={<FirstPage />} /> 
          <Route path="/FirstPage" element={<FirstPage />} /> 
          <Route path="/TwoPage" element={<TwoPage />} /> 
          <Route path="/ThreePage" element={<ThreePage />} /> 
        {/*
         <Route path="/" element={<Dashboard/>} /> 
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/form" element={<Form/>} />
*/}  

        </Route>
      
        </Routes>
    </BrowserRouter>
  )
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
      <CssBaseline />
      <AppBar>
          <Toolbar> 
            <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{mr:2}}>
              <MenuIcon/>
            </IconButton>
            <Typography variant='h6' component='div'>React Mui Sidebar</Typography>
            </Toolbar>
          </AppBar>

          <AppRouter/>
          </Box>
     
    </ThemeProvider>
  );
}
