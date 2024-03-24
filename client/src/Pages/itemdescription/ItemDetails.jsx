import { Box, Button, IconButton, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "../../Component/Item";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addToCart } from "../../state";
import { useDispatch } from "react-redux";
import Navbar from "../../Component/Navbar";


const ItemDetails = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [value, setValue] = useState("description");
  const [count, setCount] = useState(1);
  const [item, setItem] = useState(null);
  const [items, setItems] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  async function getItem() {
    const item = await fetch(
      `https://afri-new-e8b16c3eb9ad.herokuapp.com/api/items/${itemId}?populate=image`,
      {
        method: "GET",
      }
    );
    const itemJson = await item.json();
    setItem(itemJson.data);
  }

  async function getItems() {
    const items = await fetch(
      `https://afri-new-e8b16c3eb9ad.herokuapp.com/api/items?populate=image`,
      {
        method: "GET",
      }
    );
    const itemsJson = await items.json();
    setItems(itemsJson.data);
  }

  useEffect(() => {
    getItem();
    getItems();
  }, [itemId]); 

  return (
    <>
      <Navbar />
      <Box className="item-details-container" m="80px auto">
        <Box className="item-actions-container">
          {/* IMAGES */}
          <Box className="item-images-container">
            <img
              alt={item?.name}
              src={`https://afri-new-e8b16c3eb9ad.herokuapp.com${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
            />
          </Box>

          {/* ACTIONS */}
          <Box className="item-actions">
            <Box className="item-info">
              <span className="name">{item?.attributes?.name}</span>
              <span className="price">${item?.attributes?.price}</span>
              <span className="description">{item?.attributes?.shortDescription}</span>
            </Box>

            <Box className="item-quantity">
              <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
                <RemoveIcon />
              </IconButton>
              <Typography>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Box>
            <Button sx={{
              color:'#C88524',
              '&:hover': {
                  backgroundColor: '#C88524', 
                  color: '#FFF', 
              }
            }} className="add-to-cart-button"
              onClick={() => dispatch(addToCart({ item: { ...item, count } }))}
            ><span>ADD TO CART</span>
            </Button>
            </Box>
          </Box>
        </Box>

        {/* INFORMATION */}
        <Box className="item-information">
          <h3>Description</h3>
          <Box className="information-content">
            {value === "description" && (
              <div>{item?.attributes?.longDescription}</div>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ItemDetails;
