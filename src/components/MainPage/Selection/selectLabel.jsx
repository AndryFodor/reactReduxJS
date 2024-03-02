import { Field } from "formik";

export const SelectLabel = ({ attributes, title, options }) => {
  return (
    <label className="select">
      <span className="visually-hidden">{title}</span>
      <Field as="select" {...attributes}>
        {options
          ? Array.from(options).map(([value, desc], idx) => (
              <option value={value} key={idx}>
                {desc}
              </option>
            ))
          : null}
      </Field>
    </label>
  );
};

