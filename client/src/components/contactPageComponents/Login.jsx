

export default function Login() {
  return (
    <section>
          <div className="form-wrap">
              <h2>Sign Up</h2>
              <form action="">
                  
                  <div className="input-fields">
                      <label htmlFor="email"></label>
                      <input type="email" name="email" />
                  </div>
                  <div className="input-fields">
                      <label htmlFor="password"></label>
                      <input type="password" name="password" />
                  </div>
                  <div className="input-fields">
                      <button>Sign Up</button>
                  </div>
                  <h6>Dont have an account <span>Create an Account</span></h6>
              </form>
      </div>
    </section>
  )
}
