function Card(props) {
	return (
		<>
			<div className="col">
				<div className="card bg-dark bg-darkbg-dark h-100">
					<img src={props.imgSrc} className="card-img-top" alt={props.altText} />
					<div className="card-body d-flex flex-column justify-content-between">
						<div className="mb-3">
							<h5 className="card-title fw-bold">{props.title}</h5>
							<p className="card-text">{props.description}</p>
						</div>
						<div className='d-flex justify-content-end'>
							<a className='btn' href={props.btnRedirect} target='_blank'>visit</a>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Card;