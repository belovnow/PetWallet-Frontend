import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { green, red } from "@mui/material/colors";

const styles = createStyles(
    {
        income: {            
            backgroundColor: green[200],
        },
        expense: {
            backgroundColor: red[300],
        }
    });

export const useStyles = makeStyles(styles);
