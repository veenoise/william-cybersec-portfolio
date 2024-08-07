function Nav(){
	return (
		<>
			<nav className="navbar navbar-dark navbar-expand-md bg-dark fixed-top">
				<div className="container-fluid d-flex justify-content-end">
					<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					{/* <div className="collapse navbar-collapse d-md-flex justify-content-md-center" id="navbarNavAltMarkup">
						<div className="navbar-nav gap-3">
							<a className="nav-link text-center" data-to-scrollspy-id="home" href="#home">Home</a>
							<a className="nav-link text-center" data-to-scrollspy-id="skills" href="#skills">Skills</a>
							<a className="nav-link text-center" data-to-scrollspy-id="experience" href="#experience">Experience</a>
							<a className="nav-link text-center" data-to-scrollspy-id="projects" href="#projects">Projects</a>
							<a className="nav-link text-center" data-to-scrollspy-id="contact" href="#contact">Contact</a>
						</div>
					</div> */}
					<div className="offcanvas offcanvas-end bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
						<div className="offcanvas-header">
							<button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
						</div>
						<div className="offcanvas-body">
							<ul className="navbar-nav justify-content-end justify-content-md-center flex-grow-1 ps-3 ps-md-0 gap-md-3">
								<li className="nav-item">
									<a className="nav-link text-center" data-to-scrollspy-id="home" href="#home">Home</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-center" data-to-scrollspy-id="skills" href="#skills">Skills</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-center" data-to-scrollspy-id="experience" href="#experience">Experience</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-center" data-to-scrollspy-id="projects" href="#projects">Projects</a>
								</li>
								<li className="nav-item">
								<a className="nav-link text-center" data-to-scrollspy-id="contact" href="#contact">Contact</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Nav;