import React from "react";
import { useState } from "react";
const Register = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    city: "",
    languages: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    console.log(formData);
  };
  return (
    <>
      <div className="container bg-info mt-5 mb-1 p-5 card">
        <p className="h3 text-dark">Register</p>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3 mt-3">
            <label htmlFor="fullName" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter Full Name"
              className="form-control w-25"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              className="form-control w-25"
              onChange={handleChange}
            />
          </div>
          <div className="mt-3 mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              className="form-control w-25"
              placeholder="Enter Phone Number"
              maxLength={10}
              onChange={handleChange}
            />
          </div>
          <div className="mt-3 mb-3">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control w-25"
              onChange={handleChange}
              name="dob"
            />
          </div>
          <div className="mb-3 mt-3">
            <label className="form-label d-block">Gender</label>
            <div className="form-check">
              <label htmlFor="male" className="form-label">
                Male
              </label>
              <input
                type="radio"
                name="gender"
                id="male"
                value={"male"}
                className="form-check-input"
                onChange={handleChange}
              />
            </div>
            <div className="form-check">
              <input
                type="radio"
                name="gender"
                id="female"
                value={"female"}
                className="form-check-input"
                onChange={handleChange}
              />
              <label htmlFor="female" className="form-label">
                Female
              </label>
            </div>
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <select
              name="city"
              id="city"
              className="form-select w-25"
              onChange={handleChange}
              defaultValue={""}
            >
              <option disabled value={""}>
                Enter City
              </option>
              <option value="chennai">Chennai</option>
              <option value="coimbatore">Coimbatore</option>
              <option value="madurai">Madurai</option>
            </select>
          </div>
          <div className="mb3 mt-3">
            <label htmlFor="languages">Languages</label>
            <div className="form-check mt-1">
              <input
                type="checkbox"
                className="form-check-input"
                value={"eng"}
                id="eng"
                onChange={handleChange}
              />
              <label htmlFor="eng">English</label>
            </div>
            <div className="form-check mt-1">
              <input
                type="checkbox"
                className="form-check-input"
                value={"tam"}
                id="tam"
                onChange={handleChange}
              />
              <label htmlFor="tam">Tamil</label>
            </div>
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="pwd" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control w-25"
              placeholder="Enter Password"
              onChange={handleChange}
              name="password"
            />
          </div>
          <div>
            <input
              type="submit"
              value="Register"
              className="btn btn-success me-2"
            />
            <input
              type="reset"
              className="btn btn-warning"
              onClick={() => {
                setSubmitted(false);
              }}
            />
          </div>
        </form>
      </div>
      {submitted && (
        <>
          <div>
            <h2>Submitted data</h2>
            <p>
              <strong>Name:{formData.fullName}</strong>
            </p>
            <p>
              <strong>DOB:{formData.dob}</strong>
            </p>
            <p>
              <strong>Email:{formData.email}</strong>
            </p>
            <p>
              <strong>Phone:{formData.phone}</strong>
            </p>
            <p>
              <strong>City:{formData.city}</strong>
            </p>
            <p>
              <strong>Gender:{formData.gender}</strong>
            </p>
            <p>
              <strong>Password:{formData.password}</strong>
            </p>
          </div>
        </>
      )}
    </>
  );
};

export default Register;
