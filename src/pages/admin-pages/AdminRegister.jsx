import React from "react";
import ComponentWrapper from "../../wrapper/ComponentWrapper";
import admin_register_page from "../../assets/admin-register-page.png";

function AdminRegister() {
  return (
    <ComponentWrapper>
      <div className="auth-container">
        <div className="img">
          <h3>Let's build your store's success together.</h3>
          <img src={admin_register_page} alt="" />
        </div>
        <div className="form-content">
          {/* fullName email phone password */}
          <form>
            <div>
              <label htmlFor="fullname">Full Name: </label>
              <br />
              <input type="text" name="fullname" />
            </div>

            <div>
              <label htmlFor="email">E-Mail: </label>
              <br />
              <input type="text" name="email" />
            </div>

            <div>
              <label htmlFor="phone">Phone No.: </label>
              <br />
              <input type="text" name="phone" />
            </div>

            <div>
              <label htmlFor="Password">Password: </label>
              <br />
              <input type="text" name="Password" />
            </div>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </ComponentWrapper>
  );
}

export default AdminRegister;
