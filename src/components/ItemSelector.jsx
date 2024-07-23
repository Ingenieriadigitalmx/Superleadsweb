import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Btn } from './Styled';
import { ExpandMoreOutlined, Language } from '@mui/icons-material';

const idioma = {
  'ES': '/',
  'EN': '/en'
};
const options = Object.keys(idioma);

export default function ItemSelector() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);

  React.useEffect(() => {
    const currentPath = window.location.pathname;
    const index = currentPath.startsWith('/en') ? 1 : 0; // Asumiendo que solo tienes dos opciones
    setSelectedIndex(index);
  }, []);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
    window.location.href = idioma[options[index]];
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List component="nav" aria-label="Language settings">
        <ListItemButton
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="select language"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
        >
          <Btn
            vargridgap='4px'
            varcolor='#222F5D'
            backgcolor='#fff'
            border='solid #dddddd 1px'
            varpadding = '8px 10px'
            borderRadius ='50px'
            varfontsize = '16px'
            fontSizeMobile = '14px'
          >
            <Language />
            <ListItemText secondary={options[selectedIndex]} />
            <ExpandMoreOutlined fontSize="small" />
          </Btn>
        </ListItemButton>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}