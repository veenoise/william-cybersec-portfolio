import react from './assets/react.svg'

function Footer() {
	return (
		<>
			<footer className="d-flex justify-content-center align-items-center gap-2" style={{marginTop: "56px"}}>
				<p style={{
					margin: "0"
				}}
				>
					powered by react
				</p>
				<img src={react} className="spin" alt="react image" />
			</footer>
		</>
	)
}

export default Footer;