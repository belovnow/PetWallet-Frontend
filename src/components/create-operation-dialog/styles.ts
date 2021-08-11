import { createStyles, makeStyles } from "@material-ui/core";

const styles = createStyles({
    dialog: {        
        textAlign: "center"
    },
    formInput: {
        marginBottom: "10px",
    },
});

export const useStyles = makeStyles(styles);