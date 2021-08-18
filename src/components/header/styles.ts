import { createStyles, makeStyles } from "@material-ui/core";

const styles = createStyles({
    header: {
      backgroundColor: "white",
      display: "flex",
      justifyContent: "space-between"
    },
    logo: {
      textDecoration: "none",
      fontFamily: 'Montserrat'
    }
});

export const useStyles = makeStyles(styles);
