import React from "react";
import PropsTypes from "prop-types";
import { withFormik } from "formik";
import * as Yup from "yup"; // for everything
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const divStyle = {
  marginTop: "20px"
};

const MyInnerForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="nick"
        label="Tu Nick"
        type="text"
        value={values.nick}
        helperText="Introduce tu Nick"
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.nick && touched.nick ? "text-input error" : ""}
      />

      {errors.nick &&
        touched.nick && (
          <Typography variant="subheading" gutterBottom color="secondary">
            {errors.nick}
          </Typography>
        )}

      <div style={divStyle}>
        <Button variant="contained" type="submit">
          Empezar Juego
        </Button>
      </div>
    </form>
  );
};

MyInnerForm.propTypes = {
  onSubmit: PropsTypes.func.isRequired
};

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({ nick: "" }),
  validationSchema: Yup.object().shape({
    nick: Yup.string().required("Nick is required!")
  }),
  handleSubmit: (values, { props }) => {
    props.onSubmit(values.nick);
  }
})(MyInnerForm);

export default EnhancedForm;
