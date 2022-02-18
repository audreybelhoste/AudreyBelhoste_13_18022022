const FeatureItem = ({img, alt, title, description}) => {
	return (
		<div className="feature-item">
			<img src={img} alt={alt} className="feature-icon" />
			<h3 class="feature-item-title">{title}</h3>
			<p>
				{description}
			</p>
		</div>
	)
}

export default FeatureItem