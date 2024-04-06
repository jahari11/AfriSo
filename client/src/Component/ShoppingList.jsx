import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography, Tab, Tabs, useMediaQuery } from '@mui/material';
import Item from './Item';
import { setItems } from '../state/index.js';

const ShoppingList = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("all");
  const items = useSelector((state) => state.cart.items);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItems() {
    const items = await fetch("https://afribodycareserver-ec9759a4ed30.herokuapp.com/api/items?populate=image", {
      method: "GET"
    });

    const itemsJson = await items.json();
    dispatch(setItems(itemsJson.data));
  }

  useEffect(() => {
    getItems();
  }, []);

  const topRatedItems = items.filter(
    (item) => item.attributes && item.attributes.category === "topRated"
  );
  const newArrivalsItems = items.filter(
    (item) => item.attributes && item.attributes.category === "newArrivals"
  );
  const bestSellersItems = items.filter(
    (item) => item.attributes && item.attributes.category === "bestSellers"
  );

  return (
    <Box className="shopping-list">
      <Typography variant='h3' className="shopping-list-title">
        <b><span className="gold">Shop Afri Body Care</span></b>
      </Typography>
      <Tabs
        value={value}
        indicatorColor='red'
        centered
        onChange={handleChange}
        TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
            '& .MuiTabs-flexContainer': {
              flexWrap: "wrap",
              
              '& .MuiTab-root': {
                color: 'grey',
                 // Change color to your desired color
                '&:hover': {
                  color: 'black', // Change color on hover to your desired color
                },
                '&.Mui-selected': {
                  color: '#C88524' // Change color when selected to your desired color
                }
              }
            }
          }}
        className="shopping-list-tabs"
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab label="BEST SELLERS" value="bestSellers" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>
      <Box className="shopping-list-items">
        {value === "all" && items.map((item) => (
          <Item item={item} key={`${item.name}-${item.name}-${item.id}`} />
        ))}
        {value === "newArrivals" && newArrivalsItems.map((item) => (
          <Item item={item} key={`${item.name}-${item.name}-${item.id}`} />
        ))}
        {value === "bestSellers" && bestSellersItems.map((item) => (
          <Item item={item} key={`${item.name}-${item.name}-${item.id}`} />
        ))}
        {value === "topRated" && topRatedItems.map((item) => (
          <Item item={item} key={`${item.name}-${item.name}-${item.id}`} />
        ))}
      </Box>
    </Box>
  );
};

export default ShoppingList;
