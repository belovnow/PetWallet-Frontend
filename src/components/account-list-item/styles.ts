import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { green, grey, red } from "@mui/material/colors";

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
