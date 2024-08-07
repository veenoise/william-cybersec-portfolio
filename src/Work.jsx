import seen from './assets/seen.png'
import gemini from './assets/gemini_cli.png'
import pomodoro from './assets/pomodoro.png'
import nmap from './assets/nmap.png'
import keylogger from './assets/keylogger.png'
import checker from './assets/checker.png'
import Card from './Card'

function Work() {
	return (
		<>
			<div className="container" style={{marginTop: "56px"}} id="projects">
				<h2 className="mb-4">projects</h2>
				<div className="row row-cols-1 row-cols-md-3 g-4">
					<Card 
						imgSrc={seen}
						altText='img of seen'
						title='Seen'
						description='This is a flask web application for the Cybersecurity department of GDSC in the capture-the-flag event I hosted.'
						btnRedirect='https://github.com/veenoise/seen'
					/>
					<Card 
						imgSrc={checker}
						altText='img of sha256 file hash checker'
						title='Sha256FileHashChecker'
						description='The project is a simple application for checking the file hash of a downloaded file to ensure the integrity of the file.'
						btnRedirect='https://github.com/veenoise/Sha256FileHashChecker'
					/>
					<Card 
						imgSrc={keylogger}
						altText='img of keylogger web extension'
						title='KeyloggerWebExtension'
						description='This project is a web extension that checks keystrokes. You can send the keystrokes to your server to monitor user activity of the target device.'
						btnRedirect='https://github.com/veenoise/KeyloggerWebExtension'
					/>
					<Card 
						imgSrc={nmap}
						altText='img of nmap'
						title='NmapBashScript'
						description='Bash script to easily use common commands in NMAP.'
						btnRedirect='https://github.com/veenoise/NmapBashScript'
					/>
					<Card 
						imgSrc={pomodoro}
						altText='img of pomodoro timer'
						title='Pomodoro-Timer-Bash-Demo'
						description='Bash script demo used in my bash session talk. It is a simple pomodoro created using bash scripting language.'
						btnRedirect='https://github.com/veenoise/Pomodoro-Timer-Bash-Demo'
					/>
					<Card 
						imgSrc={gemini}
						altText='img of gemini cli'
						title='Gemini-CLI'
						description='A simple application to integrate gemini in terminal using python and aliasing it in ~/.bashrc.'
						btnRedirect='https://github.com/veenoise/Gemini-CLI'
					/>
				</div>
			</div>
		</>
	)
}

export default Work;