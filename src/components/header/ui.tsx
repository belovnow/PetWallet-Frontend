import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const Header = () => {
    const classes = useStyles();
    
    return(
        <AppBar position="sticky" color="default">
        <Toolbar className={classes.header}>
          <Typography
            variant="h5"
            color="inherit"
            className={classes.logo}
            noWrap
            component={Link}
            to="/"
          >
            PetWallet
          </Typography>
          <IconButton component={Link} to="/info">
            <InfoOutlinedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    );
}

export default Header;
