import React from "react";
import { useFormikContext } from "formik";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton text={title} onPress={handleSubmit} />;
};

export default SubmitButton;
