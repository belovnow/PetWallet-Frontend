import { createStyles, makeStyles } from "@material-ui/core";

const styles = createStyles({
    headerBox: {
        display: "flex", 
        paddingTop: "5px"
    },
    icon: {
        position: "absolute", 
        right: "16px"
    }
});

export const useStyles = makeStyles(styles);