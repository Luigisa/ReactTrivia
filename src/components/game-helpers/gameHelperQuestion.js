import React from "react";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";

const Question = props => (
  <Slide direction="left" in={true} timeout={200} mountOnEnter unmountOnExit>
    <Typography
      variant="display1"
      gutterBottom
      color="secondary"
      align="center"
    >
      {props.question}
    </Typography>
  </Slide>
);
export default Question;
