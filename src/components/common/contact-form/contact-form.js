import React, { useState } from "react";
import { Formik } from "formik";
import "./contact-form.scss";

const ContactForm = ({ formDark }) => {
  const initialValues = { email: "", message: "" };
  const [sendState, setSendState] = useState("initial");

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

  const onSubmit = (values, { setSubmitting, setValues, setFormikState }) => {
    fetch("https://us-central1-fluxion-portfolio.cloudfunctions.net/sendEmail", {
      method: "post",
      body: JSON.stringify({
        email: values.email,
        message: values.message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        setSendState("success");
        setValues({ email: "", message: "" });
        setFormikState({ touched: false });
        setSubmitting(false);
      })
      .catch(e => {
        console.error(e);
        setSendState("error");
      });
  };

  const closeAlert = () => setSendState("initial");

  return (
    <Formik initialValues={initialValues} validate={validateFunc} onSubmit={onSubmit}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, isValid, setTouched }) => (
        <form className={`form ${formDark ? "form-dark" : ""}`} onSubmit={handleSubmit}>
          {isSubmitting ? (
            <div className="ml-7">
              <div className="spinner-border text-dark p-5" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              {sendState === "success" && (
                <div className="alert alert-success" role="alert">
                  <b>Thank you!</b> your message has been sent. Expect a response, soon.
                  <button type="button" className="close" onClick={closeAlert}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              )}

              {(sendState === "error" || sendState === "initial") && (
                <>
                  {sendState === "error" && (
                    <div className="alert alert-danger" role="alert">
                      <b>Oops!</b> something seems to of gone wrong. try again or send me an email directly
                      <button type="button" className="close" onClick={closeAlert}>
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  )}
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
            </>
          )}
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
