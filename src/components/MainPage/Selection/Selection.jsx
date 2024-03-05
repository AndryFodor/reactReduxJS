import { Field, Form, Formik } from "formik";
import styles from "./Selection.module.css";
import { SelectLabel } from "./selectLabel";
import { useEffect, useState } from "react";

export const Selection = () => {
  let [formValues, setFormValues] = useState({
    search: "",
    duration: "",
    level: "",
  });

  useEffect(() => {
    console.log(formValues);
  },[formValues])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <section className={styles["trips-filter"]}>
      <h2 className="visually-hidden">Trips filter</h2>
      <Formik initialValues={formValues}>
        {() => (
          <Form className={styles["trips-filter__form"]} autoComplete="off">
            {/* Label is bad decision. Here should be just Field with value */}
            <label className={styles["trips-filter__search"] + " input"}>
              <span className="visually-hidden">Search by name</span>
              <Field
                data-test-id="filter-search"
                name="search"
                type="search"
                placeholder="search by title"
                value={formValues.search}
                onChange={handleChange}
              />
            </label>
            <SelectLabel
              title={"Search by duration"}
              attributes={{
                "data-test-id": "filter-duration",
                name: "duration",
              }}
              options={
                new Map([
                  ["", "duration"],
                  ["0_x_5", "< 5 days"],
                  ["5_x_10", "< 10 days"],
                  ["10", "≥ 10 days"],
                ])
              }
              value={formValues.duration}
              handleChange={handleChange}
            />
            <SelectLabel
              title={"Search by level"}
              attributes={{
                "data-test-id": "filter-level",
                name: "level",
              }}
              options={
                new Map([
                  ["", "value"],
                  ["easy", "easy"],
                  ["moderate", "moderate"],
                  ["difficult", "difficult"],
                ])
              }
              value={formValues.level}
              handleChange={handleChange}
            />
          </Form>
        )}
      </Formik>
    </section>
  );
};
