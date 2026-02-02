import React from "react";

const Register = () => {
  return (
    <div className="container bg-info mt-5 mb-1 p-5 card">
      <p className="h3 text-dark">Register</p>
      <form action="">
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
          />
        </div>
        <div className="mt-3 mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="tel"
            className="form-control w-25"
            placeholder="Enter Phone Number"
            maxLength={10}
          />
        </div>
        <div className="mt-3 mb-3">
          <label htmlFor="dob" className="form-label">
            Date of Birth
          </label>
          <input type="date" className="form-control w-25" />
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
            />
          </div>
          <div className="form-check">
            <input
              type="radio"
              name="gender"
              id="female"
              value={"female"}
              className="form-check-input"
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
          <select name="city" id="city" className="form-select w-25">
            <option selected disabled>
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
            />
            <label htmlFor="eng">English</label>
          </div>
          <div className="form-check mt-1">
            <input
              type="checkbox"
              className="form-check-input"
              value={"tam"}
              id="tam"
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
          />
        </div>
        <div>
          <input
            type="submit"
            value="Register"
            className="btn btn-success me-2"
          />
          <input type="reset" className="btn btn-warning" />
        </div>
      </form>
    </div>
  );
};

export default Register;
