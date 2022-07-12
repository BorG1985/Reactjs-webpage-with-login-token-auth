import React, { useState } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
	return fetch('http://localhost:8080/login', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(credentials)
	})
	  .then(data => data.json())
   }

function Login({ setToken }) {
	const [username, setUserName] = useState();
  	const [password, setPassword] = useState();
	const handleSubmit = async e => {
	e.preventDefault();
	const token = await loginUser({
		username,
		password
	});
	setToken(token);
	}
  return (
    <>
    <div className="limiter login-wrapper">
		<div className="container-login100">
			<div className="wrap-login100">
				<form className="login100-form validate-form" onSubmit={handleSubmit}>
					<span className="login100-form-title p-b-26">
						Welcome
					</span>
					<span className="login100-form-title p-b-48">
						<i className="zmdi zmdi-font"></i>
					</span>

					<div className="wrap-input100 validate-input">
						<input className="input100" type="text" onChange={e => setUserName(e.target.value)} />
						<span className="focus-input100" data-placeholder="Username"></span>
					</div>

					<div className="wrap-input100 validate-input" data-validate="Enter password">
						<span className="btn-show-pass">
							<i className="zmdi zmdi-eye"></i>
						</span>
						<input className="input100" type="password" onChange={e => setPassword(e.target.value)} />
						<span className="focus-input100" data-placeholder="Password"></span>
					</div>

					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn">
								Login
							</button>
						</div>
					</div>

					<div className="text-center p-t-115">
						<span className="txt1">
							Don’t have an account?
						</span>

						<a className="txt2" href="#">
							Sign Up
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	

	<div id="dropDownSelect1"></div>
	
	<script src="assets/vendor/jquery/jquery-3.2.1.min.js"></script>
	<script src="assets/vendor/animsition/js/animsition.min.js"></script>
	<script src="assets/vendor/bootstrap/js/popper.js"></script>
	<script src="assets/vendor/bootstrap/js/bootstrap.min.js"></script>
	<script src="assets/vendor/select2/select2.min.js"></script>
	<script src="assets/vendor/daterangepicker/moment.min.js"></script>
	<script src="assets/vendor/daterangepicker/daterangepicker.js"></script>
	<script src="assets/vendor/countdowntime/countdowntime.js"></script>
	<script src="assets/js/main.js"></script>
    </>
  )
}
Login.propTypes = {
	setToken: PropTypes.func.isRequired
  }

export default Login