import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Nav(){
	const location = useLocation();

	return (
		<>
			<nav className="navbar navbar-dark navbar-expand-md fixed-top">
				<div className="container-fluid d-flex justify-content-end">
					<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="offcanvas offcanvas-end bg-dark" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
						<div className="offcanvas-header">
							<button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
						</div>
						<div className="offcanvas-body">
							<ul className="navbar-nav justify-content-end justify-content-md-center flex-grow-1 gap-md-3">
								{
									location.pathname === '/' ? 
									<>
										<li className="nav-item">
											<HashLink className="nav-link text-center" data-to-scrollspy-id="home" to="#home">Home</HashLink>
										</li>
										<li className="nav-item">
											<HashLink className="nav-link text-center" data-to-scrollspy-id="skills" to="#skills">Skills</HashLink>
										</li>
										<li className="nav-item">
											<HashLink className="nav-link text-center" data-to-scrollspy-id="experience" to="#experience">Experience</HashLink>
										</li>
										<li className="nav-item">
											<HashLink className="nav-link text-center" data-to-scrollspy-id="projects" to="#projects">Projects</HashLink>
										</li>
										<li className="nav-item">
											<HashLink className="nav-link text-center" data-to-scrollspy-id="certificates" to="#certificates">certificates</HashLink>
										</li>
										<li className="nav-item">
											<HashLink className="nav-link text-center" data-to-scrollspy-id="contact" to="#contact">Contact</HashLink>
										</li>
									</>
									:
									<li className='nav-item'>
										<Link to="/" style={{textDecoration: "none"}} className="nav-link text-center">
											Home
										</Link>
									</li>
									
								}
								
								<li className="nav-item">
									<Link 
										to="/blogs?page=1" 
										className="nav-link text-center"
										style={{
											textDecoration: "none", 
											background:"-webkit-linear-gradient(200deg, hsla(0, 0%, 6%, 1) 5%, hsla(348, 83%, 47%, 1) 100%)", 
											borderRadius:"10px", 
											fontWeight: "bold"
										}}>
											Blogs
									</Link>
									
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