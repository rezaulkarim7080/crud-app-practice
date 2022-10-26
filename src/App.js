import logo from "./logo.svg";
import "./App.css";

import Home from "./components/Home";
import Course from "./components/Course";
import Allcources from "./components/Allcources";
import Addcourse from "./components/Addcourse";
import Menu from "./components/Menu";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App(props) {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center", backgroundColor: " orange", height: "80px", paddingTop: "20px" }}>Welcome to Add Course Registration</h1>

      <Box sx={{ flexGrow: 0 }}>
        <Grid container spacing={0} columns={12}>
          <Grid xs={4}>
            <Menu />
          </Grid>

          <Grid xs={8}>
            <Allcources />
          </Grid>
        </Grid>
      </Box>

      {/* <Router>
        <Box sx={{ flexGrow: 0 }}>
          <Grid container spacing={0} columns={12}>
            <Grid xs={4}>
              <Menu />
            </Grid>

            <Grid xs={8}>
              <Route path="/" component={Home} exact />
              <Route path="/add-course" component={Addcourse} exact />
              <Route path="/view-course" component={Allcources} exact />
            </Grid>
          </Grid>
        </Box>
      </Router> */}
    </div>
  );
}

export default App;
