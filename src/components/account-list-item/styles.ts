import { createStyles, makeStyles } from "@material-ui/core";
import { green, grey, red } from "@material-ui/core/colors";

const styles = createStyles({
    income: {
        color: green[400],
        backgroundColor: grey[200],
    },
    expense: {
        color: red[400],
        backgroundColor: grey[200],
    },
});

export const useStyles = makeStyles(styles);
