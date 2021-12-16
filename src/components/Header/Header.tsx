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
import { makeStyles } from '@mui/styles';
import {Link, Menu, MenuItem } from '@mui/material';
import { padding } from '@mui/system';

const useStyles = makeStyles({
  logo: {
    maxWidth: 83,
  },
  grow:{
    flexGrow: 1.
  },
  gradiente: {
    background: "linear-gradient(to right, #920D65,#D81C98 )"
  },
  buttonHover:{
    '&:hover': {
      backgroundColor: '#C71990',
    }
  }
});

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed" className={classes.gradiente}>
        <Container>
        <Toolbar>
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingTop: 1, paddingLeft:1 }}>
           <Link href="https://www.gria.io/"><img src={logo} alt="Logo Gria" className={classes.logo} /></Link>
            
          </Typography>
          <div className={classes.grow}/>
          <Box  sx={{display: { xs: 'flex', md: 'none' } }}>
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
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Oportunidades</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">LOGIN</Typography>
                </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', mr: 4, textTransform: 'capitalize', fontWeight: 'bold' }}
              >
                <Link href="#" color="inherit" underline="none">Oportunidades</Link>
                
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: 'bold' }}
                className={classes.buttonHover}
              >
                LOGIN
              </Button>
          </Box>
            {/* <Link href="#" color="inherit">Oportunidades</Link>
            <Button color="inherit">Login</Button> */}
          
        </Toolbar>
        </Container>  
      </AppBar>
    </Box>
  );
}
/* 
<IconButton
size="large"
edge="start"
color="inherit"
aria-label="menu"
sx={{ mr: 2 }}
>
<MenuIcon />
</IconButton> */