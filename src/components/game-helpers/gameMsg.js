import React from "react";
import Typography from "@material-ui/core/Typography";
import PropsTypes from "prop-types";

const GameMsg = props => (
  <Typography gutterBottom color="secondary" align="center" variant="display1">
    {props.msg}
  </Typography>
);

GameMsg.PropsTypes = {
  msg: PropsTypes.string.isRequired
};

export default GameMsg;
