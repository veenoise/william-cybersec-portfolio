import virus from './assets/virus.svg'
import magnify from './assets/magnifyingGlass.svg'
import download from './assets/download.svg'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'
import resume from './assets/Chua_CyberSecurityIntern.pdf'

function Hero() {
	return (
		<section className="container" style={{height: "calc(100vh - 56px)", marginTop: "56px", overflow: "hidden"}} id="home">
			<div className="row container h-100 d-flex align-items-center">
				<div className='col-12 col-md-6 h-50 d-flex flex-column justify-content-center'>
					<h1>William Chua</h1>
					<h5>🛡️ Cybersecurity Intern</h5>
					<div className='d-flex align-items-center gap-3 mt-3'>
						<a href="https://www.linkedin.com/in/william-eduard-chua/" target='_blank'>
							<img src={linkedin} alt="linkedin" height={24} />
						</a>
						<a href="https://github.com/veenoise/" target='_blank'>
							<img src={github} alt="github" height={24} />
						</a>
						<a href={resume} className="btn d-flex align-items-center justify-content-center gap-1" target='_blank'>
							<img src={download} alt="download icon" height="24" />
							<p className="pe-2" style={{margin: "0"}}>Resume</p>
						</a>
					</div>
					
					
				</div>
				<div className='col-12 col-md-6 d-flex justify-content-center align-items-center h-25' style={{position: "relative"}}>
					<img src={virus} id="virus" alt="image of a virus" height={64} />
					<div className='h-100 w-100' style={{position: "absolute"}} id="magnify">
						<img src={magnify} alt="image of a magnifying glass" height={128} />
					</div>
					
				</div>
			</div>
		</section>
	)
}

export default Hero;