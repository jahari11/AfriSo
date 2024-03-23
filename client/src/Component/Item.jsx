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

  const { category, price, name, image } = item.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box className="item-container" style={{ width: width }}>
      <Box
        className="image-container"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          alt={item.name}
          src={`http://localhost:1338${url}`}
          onClick={() => navigate(`/item/${item.id}`)}
        />
        
      </Box>

      <Box onClick={() => navigate(`/item/${item.id}`)} className="details">
        <span>{name}</span>
        <span>${price}</span>
      </Box>
    </Box>
  );
};

export default Item;
