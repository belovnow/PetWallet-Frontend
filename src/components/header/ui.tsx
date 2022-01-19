import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useStyles } from "./styles";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Header = () => {
    const classes = useStyles();
    
    return (
      <AppBar position="sticky" color="default" className={classes.main}>
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
        <IconButton component={Link} to="/info" size="large">
          <InfoOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    );
}

export default Header;
