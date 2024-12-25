
export default function Signup() {
  return (
    <section>
          <div className="form-wrap">
              <h2>Sign Up</h2>
              <form action="">
                  <div className="input-fields">
                      <label htmlFor="">FirstName</label>
                      <input type="text" name="FirstName"/>
                  </div>
                  <div className="input-fields">
                      <label htmlFor="LastName"></label>
                      <input type="text" name="LastName"/>
                  </div>
                  <div className="input-fields">
                      <label htmlFor="email"></label>
                      <input type="email" name="email" />
                  </div>
                  <div className="input-fields">
                      <label htmlFor="contact"></label>
                      <input type="tel" name="contact"/>
                  </div>
                  <div className="input-fields">
                      <label htmlFor="password"></label>
                      <input type="password" name="password" />
                  </div>
                  <div className="input-fields">
                      <label htmlFor="confirmPassword"></label>
                      <input type="password" name="confirmPassword" />
                  </div>
                  <div className="input-fields">
                      <button>Sign Up</button>
                  </div>
              </form>
      </div>
    </section>
  )
}
