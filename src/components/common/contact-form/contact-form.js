import React from "react";
import { Formik } from "formik";
import "./contact-form.scss";

const ContactForm = ({ formDark }) => {
  const initialValues = { email: "", message: "" };

  const validateFunc = values => {
    let errors = {};

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Please provide a valid email.";
    }

    if (!values.message) {
      errors.message = "Please provide a message.";
    }

    return errors;
  };

  const onSubmit = (values, { setSubmitting, setValues }) => {
    setTimeout(() => {
      setSubmitting(false);
      setValues({ email: "", message: "" });
    }, 4000);
  };

  return (
    <Formik initialValues={initialValues} validate={validateFunc} onSubmit={onSubmit}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValid, setTouched }) => (
        <form className={`form ${formDark ? "form-dark" : ""}`} onSubmit={handleSubmit}>
          {isSubmitting && (
            <div className="alert alert-success" role="alert">
              <b>Well done!</b> We will contact you soon.
              <button type="button" className="close" onClick="submitTrigger = false">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}

          {!isSubmitting && (
            <>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="Email" className="d-flex justify-content-between">
                    Email
                    {errors.email && touched.email && <span className="text-danger small">{errors.email}</span>}
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="e.g. example@example.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="d-flex justify-content-between">
                  Message
                  {errors.message && touched.message && <span className="text-danger small">{errors.message}</span>}
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="How are you?"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                />
              </div>

              <div className="d-inline-block position-relative">
                {!isValid && (
                  <div
                    className="position-absolute w-100 h-100"
                    onMouseOver={() => {
                      setTouched({ email: true, message: true });
                    }}
                  />
                )}
                <button className="btn btn-primary" type="submit">
                  Send message
                </button>
              </div>
            </>
          )}
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
