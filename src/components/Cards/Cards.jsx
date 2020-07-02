import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "...loading";
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.infected)}
          xs={12}
          md={3}
        >
          <CardContent>
            <Typography
              style={{ fontSize: "2rem" }}
              color="textSecondary"
              gutterBottom
            >
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                style={{ color: "#2179b8" }}
                start={0}
                end={confirmed.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography style={{ margin: "1.5rem 0" }} color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of active case of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.recovered)}
          xs={12}
          md={3}
        >
          <CardContent>
            <Typography
              style={{ fontSize: "2rem" }}
              color="textSecondary"
              gutterBottom
            >
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                style={{ color: "#2fad68" }}
                start={0}
                end={recovered.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography style={{ margin: "1.5rem 0" }} color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of recoveries from COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(styles.card, styles.deaths)}
          xs={12}
          md={3}
        >
          <CardContent>
            <Typography
              style={{ fontSize: "2rem" }}
              color="textSecondary"
              gutterBottom
            >
              Deaths
            </Typography>
            <Typography variant="h5">
              <CountUp
                style={{ color: "#d61c35" }}
                start={0}
                end={deaths.value}
                duration={2}
                separator=","
              />
            </Typography>
            <Typography style={{ margin: "1.5rem 0" }} color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">
              Number of deaths caused by COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
