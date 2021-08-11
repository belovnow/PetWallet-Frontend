import { createStyles, makeStyles } from "@material-ui/core"
import { green, red } from "@material-ui/core/colors";

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
