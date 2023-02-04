import React from 'react'
import './Loginform.css'


function Login() {
  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
    <div className='Login'>
        <h2 className='mb-3 '> Login</h2>
        <form className='needs-validation'>
        <div className='Foram-group was-validated mb-2'>
            <label htmlfor='email'className='form-label'>Email Address</label>
            <input type="email"className='form-control'required/>
            <div className="invalid-feedback">
                Please Enter Your email
            </div>
        </div>
        <div className='Foram-group was-validated mb-2'>
            <label htmlfor='Password'className='form-label'>Paddword</label>
            <input type="Password"className='form-control'required/>
            <div className="invalid-feedback">
                Please Enter Your password 
            </div>
        </div>
        <div className='Foram-group form-check mb-2'>
         <input type="checkbox"className='form-check-input'/>
         <label htmlfor='check'className='form-check-label'>Remember me</label>   
        </div>
        <button type='submit' className='btn btn-success w-100 mt-2'>SIGN IN</button>

    </form>
    </div>
    </div>
  )
}

export default Login