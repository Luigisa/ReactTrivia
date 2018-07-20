import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PropsTypes from "prop-types";

function SimpleAppBar(props) {
  return (
    <div>
      <Grid container spacing={40}>
        <Grid item xs={12}>
          <AppBar position="static" color="default">
            <Toolbar>
              <Grid item xs={4}>
                <Typography
                  variant="body2"
                  gutterBottom
                  color="primary"
                  align="center"
                >
                  Nick: {props.playerName}
                </Typography>
              </Grid>

              <Grid item xs={4}>
                <Typography
                  variant="body2"
                  gutterBottom
                  color="primary"
                  align="center"
                >
                  Preguntas correctas: {props.score}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  variant="body2"
                  gutterBottom
                  color="primary"
                  align="center"
                >
                  Preguntas totales: {props.totalQuestions}
                </Typography>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </div>
  );
}

SimpleAppBar.propTypes = {
  playerName: PropsTypes.string.isRequired,
  score: PropsTypes.number.isRequired,
  totalQuestions: PropsTypes.number.isRequired
};

export default SimpleAppBar;
