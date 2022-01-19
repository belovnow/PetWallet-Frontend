import { createStyles, makeStyles } from "@material-ui/core";

const styles = createStyles({
    main: {
      marginBottom: "20px"
    },
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
