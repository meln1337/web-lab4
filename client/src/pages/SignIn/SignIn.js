const SignIn = () => {
	const sign_in = () => {
		let sign_in = document.getElementsByClassName("sign-in-checkbox")[0].checked
		let username = document.getElementsByClassName("sign-in-username")[0].value
		let password = document.getElementsByClassName("sign-in-password")[0].value
	
		console.log(sign_in)
	
		fetch("http://127.0.0.1:5000/authentication", {
			method: "POST",
	
			body: JSON.stringify({
				username,
				password
			}),
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(res => {
				if (res.status == 200) {
					alert("You are signed in")
				}
				else {
					alert("Something went wrong")
				}
				return res.json()
			})
			.then(data => {
				console.log(data)
				if (sign_in) {
					localStorage.setItem("Authorization", data["Authorization"])  
				}
				window.location.reload()
			})
	}

    return (
        <div className="container">
		<h2>Sign in</h2>
		<form>
			<div className="form-group">
				<label>Username</label>
				<input type="text" className="input sign-in-username" placeholder="Enter username" />
			</div>
			<div className="form-group">
				<label>Password</label>
				<input type="password" className="input sign-in-password" placeholder="Password" />
			</div>
			<div className="check">
				<input type="checkbox" className="form-check-input sign-in-checkbox" />
				<label>Check me out</label>
			</div>
			<button onClick={sign_in} type="reset" className="btn submit sign-in-submit">Submit</button>
		</form>
	</div>
    )
}

export default SignIn