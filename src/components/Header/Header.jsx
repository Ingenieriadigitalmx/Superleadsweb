import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { LogoDesktop, LogoMovil, TipograiaSuperLeads } from '../Logo';
import { Btn, RedHatDisplay } from '../Styled';
import { DateRange } from '@mui/icons-material';
import './Header.scss';
import ItemSelector from '../ItemSelector';
import { Avatar, Tooltip } from '@mui/material';

const translations = {
  en: {
    Home: 'Home',
    Precios: 'Prices',
    Blog: 'Blog',
    Academia: 'Academy'
  },
  es: {
    Home: 'Inicio',
    Precios: 'Precios',
    Blog: 'Blog',
    Academia: 'Academia'
  }
};

const pageToUrlMap = {
  Home: '/',
  Precios: '/precios',
  Blog: '/blog',
  Academia: '/academia'
};

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [currentLang, setCurrentLang] = React.useState('es');

  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const lang = currentPath.startsWith('/en') ? 'en' : 'es';
    setCurrentLang(lang);
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  let iconSuperleads = require('../../assets/SuperLeads_icon.png');
  let logo = require('../../assets/SuperLeads_logo_colors.png');
  let logoMovil = require('../../assets/SuperLeads_BRAND_SYMBOL.png');
  let typografyLogo = require('../../assets/SuperLeads Tipografia.png');

  const pages = Object.keys(pageToUrlMap);

  return (
    <AppBar position="static" style={{ backgroundColor: '#F6F8FF' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LogoDesktop src={logo} alt="Logo" />
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }} style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <LogoMovil src={logoMovil} alt="Logo" />
            <TipograiaSuperLeads src={typografyLogo} alt='tipografy superleads '/>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#4D5FC7"
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <RedHatDisplay textalign="center" color='#626262' hoverweight='700' colorHover = '#000'>
                    {translations[currentLang][page]}
                  </RedHatDisplay>
                </MenuItem>
              ))}
              
              <Tooltip title='Dashboard SuperLeads'>
                <IconButton size= 'small' sx={{ p: 0 }} style={{ margin: '12px 0 0 19px' }}>
                  <Avatar alt="Edu.superleads" src={iconSuperleads} />
                </IconButton>
              </Tooltip>
              <ItemSelector />
              <Btn vargridgap='8px' varfontsize = '12px' mdPadd = '9px 11px' varmarginMovil = '0 0 0 11px'>
                {currentLang === 'en' ? 'Consulting' : 'Asesoría'}
                <DateRange /> 
              </Btn>
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={{ justifyContent: 'flex-end', paddingRight: '40px' }}>
              {pages.map((page) => (
                <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                  <RedHatDisplay style={{ textTransform: 'none' }} textalign="center" varweight = '400' color='#626262' hoverweight='800' fontSize='16px'>
                    {translations[currentLang][page]}
                  </RedHatDisplay>
                </Button>
              ))}
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }} style={{ alignItems: 'center' }}>
                <Btn vargridgap='8px' displayMovil='none'>
                  {currentLang === 'en' ? 'Consulting' : 'Asesoría'}
                  <DateRange /> 
                </Btn>
              </Box>
              <Tooltip title='Dashboard SuperLeads'>
                <IconButton sx={{ p: 0 }} style={{ marginLeft: '13px' }} className='display'>
                  <Avatar alt="Edu.superleads" src={iconSuperleads} />
                </IconButton>
              </Tooltip>
              <ItemSelector className='display' />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;