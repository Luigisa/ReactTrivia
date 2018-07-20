import React from "react";
import Button from "@material-ui/core/Button";
import PropsTypes from "prop-types";

const GameButtonView = props => (
  <Button variant="outlined" color="secondary" fullWidth {...props} />
);

GameButtonView.PropsTypes = {
  text: PropsTypes.string.isRequired,
  onClick: PropsTypes.func.isRequired
};

export default GameButtonView;
