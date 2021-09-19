import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export const Ballot = ({ data }) => {
  const [vote1, setVote1] = useState(null);
  const [vote2, setVote2] = useState(null);
  const [vote3, setVote3] = useState(null);

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      minHeight: 350,
      maxWidth: "20%",
      maxHeight: "40vh",
      margin: "10px",
    },
    rootClicked: {
      minWidth: 275,
      maxWidth: "20%",
      maxHeight: "40vh",
      margin: "10px",
      backgroundColor: "red",
    },

    photo: {
      maxHeight: "25vh",
      maxWidth: "18vw",
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 19,
    },
    pos: {
      marginBottom: 12,
    },
    controls: {
      display: "flex",
      alignItems: "center",
    },
  });

  const handleSubmit = () => {
    setVote1(null);
    setVote2(null);
    setVote3(null);
  };

  const classes = useStyles();

  console.log(data);
  return (
    <div className="ballot">
      <h1> Your pick for Category 1: {vote1}</h1>

      <Grid container item xs={12} spacing={3}>
        {!data ? (
          <h1> Loading...</h1>
        ) : (
          // data[0].items.map((item) => <NomineeCard key={data.id} data={data} />)
          data[0].items.map((item) => (
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {item.title}
                </Typography>

                <img
                  src={`${item.photoUrL}`}
                  className={classes.photo}
                  alt="alt_tag"
                />
              </CardContent>

              <CardActions>
                <Button
                  size="large"
                  onClick={() => setVote1(item.title)}
                  // onClick={() => setBackgroundColor("yellow")}
                  // onClick={handleClick}
                >
                  Vote
                </Button>
              </CardActions>
            </Card>
          ))
        )}
      </Grid>

      <h1> Your pick for Category 2: {vote2}</h1>

      <Grid container item xs={12} spacing={3}>
        {!data ? (
          <h1> Loading...</h1>
        ) : (
          // data[0].items.map((item) => <NomineeCard key={data.id} data={data} />)

          data[2].items.map((item) => (
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {item.title}
                </Typography>

                <img
                  src={`${item.photoUrL}`}
                  className={classes.photo}
                  alt="hi0"
                />
              </CardContent>

              <CardActions>
                <Button size="large" onClick={() => setVote2(item.title)}>
                  Vote
                </Button>
              </CardActions>
            </Card>
          ))
        )}
      </Grid>
      <h1> Your pick for Category 3: {vote3}</h1>

      <Grid container item xs={12} spacing={3}>
        {!data ? (
          <h1> Loading...</h1>
        ) : (
          data[3].items.map((item) => (
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {item.title}
                </Typography>

                <img
                  src={`${item.photoUrL}`}
                  className={classes.photo}
                  alt="hi0"
                />
              </CardContent>

              <CardActions>
                <Button
                  size="large"
                  // onClick={() => setVote((prevVote) => [...prevVote, item.id])}
                  onClick={() => setVote3(item.title)}
                >
                  Vote
                </Button>
              </CardActions>
            </Card>
          ))
        )}
      </Grid>

      {vote1 && vote2 && vote3 ? (
        <Button
          style={{ margin: "25px" }}
          variant="contained"
          color="success"
          size="large"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      ) : (
        <Button style={{ margin: "25px" }} disabled size="large">
          Vote for all cateogies
        </Button>
      )}
    </div>
  );
};

export default Ballot;
