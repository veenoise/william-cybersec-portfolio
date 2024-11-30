import seen from './assets/seen.png'
import secureMultiplayerGame from './assets/secureMultiplayerGame.png'
import keylogger from './assets/keylogger.png'
import pythonNmap from './assets/pythonNmap.png'
import stockChecker from './assets/stockChecker.png'
import messageboard from './assets/messageBoard.png'
import sha1Cracker from './assets/sha1Cracker.png'
import secureSupplyChain from './assets/secureSupplyChain.png'
import Card from './Card'

function Work() {
	return (
		<>
			<div className="container" style={{marginTop: "56px"}} id="projects">
				<h2 className="mb-4">projects</h2>
				<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
					<Card 
						imgSrc={seen}
						altText='Image of seen'
						title='Seen'
						description='I developed and hosted a Capture the Flag website using Flask for GDSC to introduce users to cybersecurity concepts. The site, featuring challenges in puzzles, cryptography, web foundations, and forensics, is hosted on DigitalOcean with Nginx as a reverse proxy.'
						btnRedirect='https://github.com/veenoise/seen'
					/>
					<Card 
						imgSrc={secureMultiplayerGame}
						altText='Image of Secure Multiplayer Game'
						title='Secure Multiplayer Game'
						description='I created a multiplayer game using Socket.io, Node.js, and ExpressJS, incorporating features like smooth player movement, scoring, and collision detection. Security measures included HelmetJS, preventing XSS, disabling client-side caching, and handling client connections securely.'
						btnRedirect='https://github.com/veenoise/boilerplate-project-secure-real-time-multiplayer-game'
					/>
					<Card 
						imgSrc={keylogger}
						altText='Image of keylogger web extension'
						title='KeyloggerWebExtension'
						description='This project is a web extension that checks keystrokes. You can send the keystrokes to your server to monitor user activity of the target device.'
						btnRedirect='https://github.com/veenoise/KeyloggerWebExtension'
					/>
					<Card 
						imgSrc={messageboard}
						altText='Image of Messageboard'
						title='Messageboard'
						description='This project focused on implementing security mechanisms to enhance application security. Key measures included using HelmetJS for security headers, xFrameOptions to prevent clickjacking, disabling DNS prefetching, setting referrerPolicy to same-origin, and creating functional tests with Chai HTTP.'
						btnRedirect='https://github.com/veenoise/boilerplate-project-messageboard'
					/>
					<Card 
						imgSrc={pythonNmap}
						altText='Image of nmap'
						title='Python-Based NMAP'
						description='I built a Python-based port scanning tool, similar to NMAP, for network enumeration. It uses the socket module for connections, the validators module for IP validation, python-nmap for running commands, and Tabulate for better-formatted output.'
						btnRedirect='https://github.com/veenoise/boilerplate-port-scanner'
					/>
					<Card 
						imgSrc={stockChecker}
						altText='Image of Stock Price Checker'
						title='Stock Price Checker'
						description='I developed a stock checker application connected to a SQLite database and integrated with the FreeCodeCamp stock price checker API. Security was enhanced using HelmetJS v3.1.0 and a robust Content Security Policy for defaultSrc, scriptSrc, and styleSrc.'
						btnRedirect='https://github.com/veenoise/boilerplate-project-stockchecker'
					/>
					<Card 
						imgSrc={sha1Cracker}
						altText='Image of SHA1 Password Cracker'
						title='SHA1 Password Cracker'
						description='In this project, I implemented a password cracker that compares SHA-1 hashes of top 10,000 passwords against a given hash, with an optional feature to prepend and append salts to passwords for added security. I learned how to work with Python’s hashlib library for hashing and how to securely handle password data by applying salting techniques.'
						btnRedirect='https://github.com/veenoise/boilerplate-SHA-1-password-cracker'
					/>
					<Card 
						imgSrc={secureSupplyChain}
						altText='Image of Securing Repository Supply Chain'
						title='Securing Repository Supply Chain'
						description='I completed the "skills-secure-repository-supply-chain" project from GitHub, where I focused on securing the software supply chain and repository by implementing best practices for dependency management and vulnerability scanning. This project helped me gain hands-on experience in using tools for secure development and ensuring the integrity of code and dependencies in a repository.'
						btnRedirect='https://github.com/veenoise/skills-secure-repository-supply-chain'
					/>
				</div>
			</div>
		</>
	)
}

export default Work;