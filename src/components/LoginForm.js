import React from 'react'

export const LoginForm = () =>{
  return (
    <form className="signin-form">
        <div className="form-group mb-3">
            <label className="label" htmlFor="name">Username</label>
            <input type="text" className="form-control" placeholder="Username" required />
        </div>

        <div className="form-group mb-3">
            <label className="label" htmlFor="password">Password</label>
            <input type="password" className="form-control" placeholder="Password" required />
        </div>

        <div className="form-group">
            <button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
        </div>

        <div className="form-group d-md-flex">
            <div className="w-50 text-left">
                <label className="checkbox-wrap checkbox-primary mb-0">Remember Me
                    <input type="checkbox" defaultChecked />
                    <span className="checkmark" />
                </label>
            </div>

            <div className="w-50 text-md-right">
                <a href="#">Forgot Password</a>
            </div>
        </div>
    </form>
  )
}
