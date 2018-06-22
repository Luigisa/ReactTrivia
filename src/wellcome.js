import React, { Component } from "react";
import Header from "./components/Header";
import FormPlayer from "./components/FormPlayer";
import Grid from "@material-ui/core/Grid";

class Wellcome extends Component {
  state = {
    playerName: ""
  };

  onSetPlayerName = value => {
    this.setState({
      playerName: value
    });

    this.props.history.push(`/game/${value}`);
  };

  render() {
    return (
      <div>
        <Header />
        <Grid container spacing={24} align="center">
          <Grid item xs={12}>
            <FormPlayer onSubmit={this.onSetPlayerName} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Wellcome;
