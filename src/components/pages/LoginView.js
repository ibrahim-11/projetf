import { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

class LoginView extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          login: "",
          password: "",
        }}
        validationSchema={Yup.object().shape({
          login: Yup.string()
            .email("Saisir une adresse email valide")
            .required("Saisir un identifiant"),

          password: Yup.string()
            .required("Saisir un mot de passe")
            .min(4, "Le mot de passe doit contenir au moins 4 caractères"),
        })}
        onSubmit={(fields) => {
          console.log(fields);
        }}
      >
        {({ errors, isValid, dirty, touched }) => (
          <>
            <h3 className="text-center mt-3">Authentification</h3>

            <Form className="col-6 offset-3">
              <div className="form-group pb-3">
                <label htmlFor="login">Identifiant</label>
                <Field
                  name="login"
                  type="text"
                  className={
                    "form-control" +
                    (errors.login && touched.login ? " is-invalid" : "")
                  }
                  autoComplete="username"
                />
                <ErrorMessage
                  name="login"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>
              <div className="form-group pb-4">
                <label htmlFor="password">Mot de passe</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                  autoComplete="current-password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group d-flex justify-content-between">
                <button type="reset" className="btn btn-danger">
                  clean
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!(dirty && isValid)}
                >
                  Validate
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    );
  }
}

export { LoginView };
