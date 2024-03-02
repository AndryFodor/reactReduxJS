import { Form, Formik } from "formik";
import { Label } from "../../SignPages/Form/Label";
import styles from "./Selection.module.css";
import { SelectLabel } from "./selectLabel";
import { useState } from "react";

export const Selection = () => {
  let [formValues, setFormValues] = useState({
    search: "",
    duration: "",
    level: "",
  })

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  return (
    <section className={styles["trips-filter"]}>
      <h2 className="visually-hidden">Trips filter</h2>
      <Formik
        initialValues={formValues}
      >
        {() => (
          <Form className={styles["trips-filter__form"]} 
            autoComplete="off">
            <Label
              attributes={{
                "data-test-id": "filter-search",
                name: "search",
                type: "search",
                placeholder: "search by title"
              }}
              title={"Search by name"}
              labelClass={styles["trips-filter__search"]}
            />
            <SelectLabel
              title={"Search by duration"}
              attributes={{
                "data-test-id": "filter-duration",
                name: "duration"
              }}
              options={
                new Map([
                  ["", "duration"],
                  ["0_x_5", "< 5 days"],
                  ["5_x_10", "< 10 days"],
                  ["10", "≥ 10 days"],
                ])
              }
            />
            <SelectLabel
              title={"Search by level"}
              attributes={{
                "data-test-id": "filter-level",
                name: "level"
              }}
              options={
                new Map([
                  ["", "value"],
                  ["easy", "easy"],
                  ["moderate", "moderate"],
                  ["difficult", "difficult"],
                ])
              }
            />
          </Form>
        )}
      </Formik>
    </section>
  );
};
