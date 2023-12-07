import React, {useState} from 'react';
import NRLogo from '../pict/Nirina-logo.png';
import { Box, Menu, IconButton, MenuItem, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Box position='static' >
          <Toolbar className="flex justify-between">
            <Box>
              <img src={NRLogo} alt='logo NR' className='w-12 h-12' />
            </Box>
            <Box className="hidden md:flex flex-row">
              <a href='#' className='text-gray-600 no-underline hover:text-black transition-colors px-5' ><Typography sx={{fontSize:"20px"}} >Home</Typography></a>
              <a href='#' className='text-gray-600 no-underline hover:text-black transition-colors px-5' ><Typography sx={{fontSize:"20px"}} >About</Typography></a>          
              <a href='#' className='text-gray-600 no-underline hover:text-black transition-colors px-5' ><Typography sx={{fontSize:"20px"}} >Projects</Typography></a>          
              <a href='#' className='text-gray-600 no-underline hover:text-black transition-colors px-5' ><Typography sx={{fontSize:"20px"}} >Contact</Typography></a>          
            </Box>
            <Box className="hidden md:flex ">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                  < DarkModeRoundedIcon/>
              </IconButton>
            </Box>
            <Box className='md:hidden'>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                className='md:hidden'
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>About</MenuItem>
                <MenuItem onClick={handleClose}>Projects</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Menu>
            </Box>
          </Toolbar>

        </Box>
      </Box>

      
    </>
  )
}

export default Header;