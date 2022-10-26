import React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Check from "@mui/icons-material/Check";

const Menu = () => {
  //   const listStyle = { textAlign: "center", border: "0.2px solid lightgray" };

  return (
    <div>
      <MenuList style={{ height: "300px", marginLeft: "50px", width: "300px" }}>
        <MenuItem>
          <ListItemText inset tag="a" href="/" style={{ fontSize: "20px", padding: "10px", borderBlockEnd: "1px solid lightgray" }}>
            Home
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset tag="a" href="/add-course" style={{ fontSize: "20px", padding: "10px", borderBlockEnd: "1px solid lightgray" }}>
            Add Course
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset tag="a" href="/view-course" style={{ fontSize: "20px", padding: "10px", borderBlockEnd: "1px solid lightgray" }}>
            View Course
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset tag="a" href="/" style={{ fontSize: "20px", padding: "10px", borderBlockEnd: "1px solid lightgray" }}>
            about{" "}
          </ListItemText>
        </MenuItem>
        <MenuItem>
          <ListItemText inset tag="a" href="/" style={{ fontSize: "20px", padding: "10px", borderBlockEnd: "1px solid lightgray" }}>
            Contact
          </ListItemText>
        </MenuItem>
      </MenuList>
    </div>
  );
};

export default Menu;
