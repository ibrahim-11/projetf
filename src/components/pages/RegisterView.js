import { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

class RegisterView extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required("Saisissez votre prénom"),
          lastName: Yup.string().required("Saisissez votre nom"),
          email: Yup.string()
            .email("Saisissez une adresse email valide")
            .required("Saisissez votre adresse mail"),
          password: Yup.string()
            .min(4, "Le mot de passe doit contenir au moins 4 caractères")
            .required("Saisissez un mot de passe"),
          confirmPassword: Yup.string()
            .oneOf(
              [Yup.ref("password"), null],
              "Les mots de passes ne sont pas identiques"
            )
            .required("Confirmez votre mot de passe"),
        })}
        onSubmit={(fields) => {
          console.log(fields);
        }}
      >
        {({ errors, isValid, dirty, touched }) => (
          <>
            <h3 className="text-center mt-3">Inscription</h3>

            <Form className="col-6 offset-3">
              <div className="form-group pb-3">
                <label htmlFor="firstName">Prénom</label>
                <Field
                  name="firstName"
                  type="text"
                  className={
                    "form-control" +
                    (errors.firstName && touched.firstName ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>
              <div className="form-group pb-3">
                <label htmlFor="lastName">Nom</label>
                <Field
                  name="lastName"
                  type="text"
                  className={
                    "form-control" +
                    (errors.lastName && touched.lastName ? " is-invalid" : "")
                  }
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group pb-3">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  type="text"
                  className={
                    "form-control" +
                    (errors.email && touched.email ? " is-invalid" : "")
                  }
                  autoComplete="username"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group pb-3">
                <label htmlFor="password">Choisir un Mot de passe</label>
                <Field
                  name="password"
                  type="password"
                  className={
                    "form-control" +
                    (errors.password && touched.password ? " is-invalid" : "")
                  }
                  autoComplete="new-password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>
              <div className="form-group pb-4">
                <label htmlFor="confirmPassword">
                  Confirmer le Mot de passe
                </label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className={
                    "form-control" +
                    (errors.confirmPassword && touched.confirmPassword
                      ? " is-invalid"
                      : "")
                  }
                  autoComplete="new-password"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="invalid-feedback position-absolute"
                />
              </div>

              <div className="form-group d-flex justify-content-between">
                <button type="reset" className="btn btn-secondary">
                  Effacer
                </button>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={!(dirty && isValid)}
                >
                  Valider
                </button>
              </div>
            </Form>
          </>
        )}
      </Formik>
    );
  }
}

export { RegisterView };
