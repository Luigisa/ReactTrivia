import React from "react";
import Button from "@material-ui/core/Button";
import PropsTypes from "prop-types";

const GameButtonView = ({ text, onClick }) => (
  <Button onClick={onClick} variant="outlined" color="secondary" fullWidth>
    {text}
  </Button>
);

GameButtonView.PropsTypes = {
  text: PropsTypes.string.isRequired,
  onClick: PropsTypes.func.isRequired
};

export default GameButtonView;
