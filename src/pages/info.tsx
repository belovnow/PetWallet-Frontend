import {
  Button,
  ButtonGroup,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyle = makeStyles({
  a: {
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const InfoPage = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.a}>
      <Typography variant="h6" gutterBottom>
        Исходный код проекта
      </Typography>
      <ButtonGroup>
        <Button
          href="https://github.com/belovnow/PetWallet-Frontend"
          startIcon={<GitHubIcon />}
        >
          Frontend
        </Button>
        <Button
          href="https://github.com/belovnow/PetWallet-Backend"
          startIcon={<GitHubIcon />}
        >
          Backend
        </Button>
      </ButtonGroup>
    </Paper>
  );
};

export default InfoPage;
