const SignUp = () => {
	const sign_up = () => {
		let username = document.getElementsByClassName("sign-up-username")[0].value
		let password = document.getElementsByClassName("sign-up-password")[0].value
		let email = document.getElementsByClassName("sign-up-email")[0].value
		let place_id = document.getElementsByClassName("sign-up-place-id")[0].value
	
		fetch("http://127.0.0.1:5000/user", {
			method: "POST",
			body: JSON.stringify({
				username,
				password,
				email,
				"place_id": parseInt(place_id),
				"is_superuser": false
			}),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => {
				if (res.status == 201) {
					alert("New user is created")
				}
				else {
					alert("Something went wrong")
				}
				return res.json()
			})
			.then(data => console.log(data))
	}


    return (
        <div className="container">
		<h2>Sign up</h2>
		<form>
			<div className="form-group">
				<label>Email address</label>
				<input type="email" className="input sign-up-email" placeholder="Enter email" />
				<small id="emailHelp" className="never-share">We'll never share your email with anyone else.</small>
			</div>
			<div className="form-group">
				<label>Username</label>
				<input type="text" className="input sign-up-username" placeholder="Enter username" />
			</div>
			<div className="form-group">
				<label>Password</label>
				<input type="password" className="input sign-up-password" placeholder="Password" />
			</div>
			<div className="form-group">
				<label>Place id</label>
				<input type="number" className="input sign-up-place-id" placeholder="Place id" />
			</div>
			<button onClick={sign_up} type="reset" className="btn submit sign-up-submit">Submit</button>
		</form>
	</div>
    )
}

export default SignUp