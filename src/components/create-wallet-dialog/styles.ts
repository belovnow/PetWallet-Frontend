import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const styles = createStyles({
    dialog: {        
        textAlign: "center"
    },
    formInput: {
        marginBottom: "10px",
    },
});

export const useStyles = makeStyles(styles);