import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../assets/logo_gria.svg";
import {Link, Menu, MenuItem } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useStyles } from './styles';


export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElLogin, setAnchorElLogin] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenLoginMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLogin(event.currentTarget);
  };
  
  const handleCloseLoginMenu = () => {
    setAnchorElLogin(null);
  };
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar>
            
            <Typography variant="h6" component="div" className={classes.logoContainer}>
              <Link href="https://www.gria.io/"><img src={logo} alt="Logo Gria" className={classes.logo} /></Link>
            </Typography>
            <div className={classes.grow}/>
            <Box  sx={{display: { xs: 'flex', md: 'none' }, backgroundColor: '#CF1B92'  }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                  <MenuItem onClick={handleCloseNavMenu} className={classes.menuPaperItem}>
                    <Typography textAlign="center" className={classes.menuPaperText}>Oportunidades</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu} className={classes.menuPaperItem}>
                    <Typography textAlign="center" className={classes.menuPaperText}>LOGIN</Typography>
                  </MenuItem>
              </Menu>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ color: 'white', display: 'block', mr: 4, textTransform: 'capitalize', fontWeight: 'bold' }}
                >
                  <Link href="#" color="inherit" underline="none">Oportunidades</Link>
                  
                </Button>
                <Button
                  onClick={handleOpenLoginMenu}
                  sx={{ color: 'white', display: 'flex', fontWeight: 'bold' }}
                  className={classes.buttonHover}
                  endIcon={<KeyboardArrowDownIcon/>}
                > Login
                </Button>
                <Menu
                id="login-appbar"
                anchorEl={anchorElLogin}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElLogin)}
                onClose={handleCloseLoginMenu}
                sx={{
                  display: { xs: 'none', md: 'block' }
                }}
                className={classes.menuPaper}
              >
                  <MenuItem onClick={handleCloseLoginMenu} className={classes.menuPaperItem}>
                    <Typography textAlign="center"  className={classes.menuPaperText}>CANDIDATO</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseLoginMenu} className={classes.menuPaperItem}>
                    <Typography textAlign="center" sx={{fontSize:'0.8rem', fontWeight:'bold'}}>EMPRESA</Typography>
                  </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>  
      </AppBar>
    </Box>
  );
}
