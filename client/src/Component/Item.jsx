import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Box, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addToCart } from "../state";
import { useNavigate } from "react-router-dom";

const Item = ({ item, width }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  // Check if item and its attributes exist
  if (!item || !item.attributes) {
    return null; // Render nothing if item or attributes are missing
  }

  // Destructure attributes
  const { category, price, name, image } = item.attributes;

  // Check if image and its data exist
  if (!image || !image.data) {
    return null; // Render nothing if image or its data are missing
  }

  // Destructure image data
  const { formats } = image.data.attributes || {};
  const url = formats?.medium?.url; 

  return (
    <Box className="item-container" style={{ width: width }}>
      <Box
        className="image-container"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        {/* Render placeholder image if url is missing */}
        {url ? (
          <img
            alt={item.name}
            src={`https://afribodycareserver-ec9759a4ed30.herokuapp.com${url}`}
            onClick={() => navigate(`/item/${item.id}`)}
          />
        ) : (
          <div>No Image Available</div>
        )}
      </Box>

      <Box onClick={() => navigate(`/item/${item.id}`)} className="details">
        <span>{name}</span>
        <span>${price}</span>
      </Box>
    </Box>
  );
};

export default Item;
