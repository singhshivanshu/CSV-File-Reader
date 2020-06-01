import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Header() {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Typography variant="h5" className={classes.title} id="header-typography">
          <span id="F">C<span id="sv">SV </span> </span> <span id="F">F</span>ile <span id ="F">R</span>eader
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
