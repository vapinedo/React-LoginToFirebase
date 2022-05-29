import React from 'react'
import { LoginForm } from '../components/LoginForm'

export const LoginPage = () =>{
  return (
    <section className="ftco-section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center mb-5">
                    <h2 className="heading-section">Login #07</h2>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-12 col-lg-10">
                    <div className="wrap d-md-flex">
                        <div className="text-wrap p-4 p-lg-5 text-center d-flex align-items-center order-md-last">
                            <div className="text w-100">
                                <h2>Welcome to login</h2>
                                <p>Don't have an account?</p>
                                <a href="#" className="btn btn-white btn-outline-white">Sign Up</a>
                            </div>
                        </div>

                        <div className="login-wrap p-4 p-lg-5">
                            <div className="d-flex">
                                <div className="w-100">
                                    <h3 className="mb-4">Sign In</h3>
                                </div>
                                <div className="w-100">
                                    <p className="social-media d-flex justify-content-end">
                                    <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-facebook" /></a>
                                    <a href="#" className="social-icon d-flex align-items-center justify-content-center"><span className="fa fa-twitter" /></a>
                                    </p>
                                </div>
                            </div>

                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
