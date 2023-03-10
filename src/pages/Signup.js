import { Link } from "react-router-dom";
import "../CSS/sign.css"

const Signup = () => {
  return (<>

<main className="container">
        <div className="center-side">
          <form action="#" className="form">
            <div className="inputs">
              <label htmlFor="first-name">First Name</label>
              <input type="text" name="first-name" id="first-name" required />
            </div>
            <div className="inputs">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" name="last-name" id="last-name" required />
            </div>
            <div className="inputs">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="inputs">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type name="phoneNumber" id="phoneNumber" />
            </div>
            <div className="inputs">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" required />
            </div>
            <div className="inputs">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                required
              />
            </div>
            <div>
              <button type="submit">Create Account</button>
            </div>
          </form>
          <footer>
            <p>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </footer>
        </div>
      </main>
  </>
  );
};

export default Signup;