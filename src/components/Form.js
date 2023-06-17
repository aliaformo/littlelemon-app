import React from "react";
import { useFormik } from "formik";
import { YupSchema } from "./YupSchema";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

export default function Form(props) {
  const navigate = useNavigate();

  const [submitted, setSubmitted] = React.useState(false);
  // handle submit function that resets form then redirects user to home page
  const onSubmit = () => {
    setSubmitted(true);
    formik.resetForm();
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };
  // formik object to handle form state changes + validation
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      occasion: "birthday",
      information: "",
    },
    validationSchema: YupSchema,
    onSubmit,
  });
  return (
    // form section
    <form onSubmit={formik.handleSubmit} autoComplete="off">
      {/* flex container for the form elements */}
      <div>
        {/* display different elements based if form was submitted or not  */}
        {submitted ? (
          <>
            <h3 >
              Form Submitted! ✅
            </h3>
            <h3>
              Taking you back to home page!🏠
            </h3>
            <Spinner></Spinner>
            {}
          </>
        ) : (
          <div
            key="modal"
            className="  flex flex-col scale-[0.75] sm:scale-[0.9] md:scale-[1] items-center justify-center  bg-white"
          >
            <h3><u>
              Please, fill out this form</u>
            </h3>
            <label>
              <h4>
                Full Name <sup>*</sup>
              </h4>
            </label>
            <div className="fullName">
              <div>
                {" "}
                <input
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  id="firstName"
                  type={"text"}
                  className={`text-center   w-[150px] text-Sgray border-[3px] border-Pgreen h-[35px] rounded-[5%] font-secondary font-medium ${
                    formik.errors.firstName && formik.touched.firstName
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="First Name"
                ></input>
                {formik.errors.firstName && formik.touched.firstName ? (
                  <p className="text-[10px] text-red-500 text-start font-secondary">
                    {formik.errors.firstName}
                  </p>
                ) : null}
              </div>
              <div>
                <input
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  id="lastName"
                  type={"text"}
                  className={`text-center  w-[150px] text-Sgray border-[3px] border-Pgreen h-[35px]  rounded-[5%] font-secondary font-medium ${
                    formik.errors.lastName && formik.touched.lastName
                      ? "border-red-500"
                      : ""
                  }`}
                  placeholder="Last Name"
                ></input>
                {formik.errors.lastName && formik.touched.lastName ? (
                  <p className="text-[10px] text-red-500 text-start font-secondary">
                    {formik.errors.lastName}
                  </p>
                ) : null}
              </div>
            </div>
           
            <label>
              <h4>
                Email<sup>*</sup>
              </h4> 
            </label>
            <div>
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="email"
                type={"email"}
                className={`text-center  w-[300px] text-Sgray scale-[1.2] border-[3px] border-Pgreen  rounded-[5%] font-secondary font-medium ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="email@example.com"
              ></input>
              {formik.errors.email && formik.touched.email ? (
                <p>
                  {formik.errors.email}
                </p>
              ) : null}
            </div>

            <label>
              <h4>
                Occasion
              </h4>
            </label>
            <select
              id="occasion"
              value={formik.values.occasion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Celebration</option>
              <option>First time</option>
            </select>

            <h4>Seating Options</h4>
            <label for="standard">Standard</label>
            <input type="radio" id="standard" name="seatingOption" value="standard"/><br/>
            <label for="outside">Outside&nbsp;&nbsp;</label>
            <input type="radio" id="outside" name="seatingOption" value="outside"/><br/>

            <label>
              <h4>
                Add a special request
              </h4>
              <textarea
                value={formik.values.information}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                id="information"
              ></textarea>
            </label>
<article className="checkbox-label">
            <br/><input required type="checkbox" id="tc" name="tc" value="tc"/>
  <label for="tc"> Agree to terms and conditions</label><sup>*</sup><br/>
  </article>

  <p>(<sup>*</sup>) Required fields</p>

            <button
              type="submit">
              Let's go
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
