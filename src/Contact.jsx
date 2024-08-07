function Contact() {
	return (
		<>
			<div className="container" style={{marginTop: "56px"}} id="contact">
				<h2 className="mb-4">contact</h2>
				<form>
					<div className="mb-3">
						<label htmlFor="fullname" className="form-label">full name <span className="text-danger">*</span></label>
						<input type="text" className="form-control bg-dark" id="fullname" name="Fullname" aria-describedby="emailHelp" placeholder="John Doe" required />
					</div>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">email <span className="text-danger">*</span></label>
						<input type="email" className="form-control bg-dark" placeholder="name@sample.com" id="email" name="Email" required />
					</div>
					<div className="mb-3">
						<label htmlFor="company" className="form-label">company/organization</label>
						<input type="text" className="form-control bg-dark" placeholder="Company name" id="company" name="Company" />
					</div>
					<div className="mb-4">
						<label htmlFor="message" className="form-label">message <span className="text-danger">*</span></label>
						<textarea className="form-control bg-dark" id="message" name="Message" placeholder="Send a message..." rows="5" required></textarea>
					</div>
					<div className="d-flex justify-content-end">
						<button type="submit" className="btn">Submit</button>	
					</div>					
				</form>
			</div>
		</>
	)
}

export default Contact;