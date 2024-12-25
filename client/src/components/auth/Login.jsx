import './login.css';
import { Link } from 'react-router-dom';
import image2 from '../../assets/img4.jpg'
export default function Login() {
  return (
    <div>
      <section className='loginSection'>
          <div className='loginImage'>
             <img src={image2} alt="" />
          </div>
        <div className='LoginForm-container'>
            <div className="form-wrap">
            <h2>Login</h2>
            <p>Please fill in your Credentials</p>
              <form action="">
                  
                  <div className="input-fields">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" />
                  </div>
                  <div className="input-fields">
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password" />
                  </div>
                  <div className="input-group">
                      <input type="checkbox" name="showPassword" />
                      <p>Show Password</p>
                  </div>
                  <div className="input-fields">
                      <button>Sign in</button>
                  </div>
                  <h6>Dont have an account <Link to='/SignUp'>Create an Account</Link></h6>
              </form>
          </div>
        </div>
    </section>
    </div>
  )
}
