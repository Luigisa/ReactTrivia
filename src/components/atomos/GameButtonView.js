import React from "react";
import Button from "@material-ui/core/Button";

const GameButtonView = ({ text, onClick }) => (
  <Button onClick={onClick} variant="outlined" color="secondary" fullWidth>
    {text}
  </Button>
);

export default GameButtonView;
