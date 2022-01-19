import { Button, ButtonGroup, Paper, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import GitHubIcon from "@mui/icons-material/GitHub";

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
