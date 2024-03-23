import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge, Box, IconButton } from '@mui/material';
import { ShoppingBagOutlined, MenuOutlined, SearchOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { setIsCartOpen } from '../state/index.js';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <div className="navbar">
      <div className="navbar-content">
        <Box onClick={() => navigate("/")} className="navbar-logo">
          <span className='gold'>Afri</span> Body Care
        </Box>
        <div className="navbar-icons">
          <Badge
            badgeContent={cart.length}
            invisible={cart.length === 0}
            className="navbar-badge"
          >
            <IconButton onClick={() => dispatch(setIsCartOpen())} >
              <ShoppingBagOutlined />
            </IconButton>
          </Badge>
          <IconButton className="navbar-icon" onClick={handleMenuClick}>
            <MenuOutlined />
          </IconButton>
        </div>
      </div>
      {/* Conditional rendering of menu */}
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <IconButton className="close-menu" onClick={handleCloseMenu}>
          <MenuOutlined />
        </IconButton>
        {/* Your navigation links go here */}
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/itemshop")}>Shop</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
          {/* Add more navigation links as needed */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
