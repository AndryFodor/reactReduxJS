import { Field } from "formik";

export const Label = ({ attributes, validField, title }) => {
  const { name, errors = {}, touched = {}, validator = () => {} } = validField || {};
  return (
    <>
      <label className="input">
        <span className="input__heading">{title}</span>
        <Field {...attributes} validate={validator}/>
      </label>
      {validField && errors[name] && touched[name] && (
        <div className="errorMsg">Error: {errors[name]}</div>
      )}
    </>
  );
};
