import React from "react";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import PropsTypes from "prop-types";

const Question = props => (
  <Slide direction="left" in={true} timeout={200} mountOnEnter unmountOnExit>
    <Typography variant="display1" gutterBottom color="primary" align="center">
      {props.question}
    </Typography>
  </Slide>
);

Question.PropsTypes = {
  question: PropsTypes.string.isRequired
};

export default Question;
