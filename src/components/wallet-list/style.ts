import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

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