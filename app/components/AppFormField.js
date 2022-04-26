import React from "react";
import { useFormikContext } from "formik";

import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";

function AppFormField({ name, ...otherProps }) {
  const { setFieldTouched, errors, handleChange, touched } = useFormikContext(
    {}
  );
  return (
    <>
      <AppTextInput
        // autoCapitalize="none"
        // autoCorrect={false}
        // icon="email"
        // keyboardType="email-address"
        // placeholder="Email"
        // textContentType="emailAddress"
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
