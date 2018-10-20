function getColor(d) {
	return	d > 1000 ? '#0868ac' :
			d > 130  ? '#2f8ec0' :
			d > 100  ? '#55b0c8' :
			d > 80   ? '#7bccc4' :
			d > 70   ? '#a5dcbe' :
			d > 50   ? '#ccebca' :
			'#ccebca';
}

function style(feature) {
	return {
		weight: 2,
		opacity: 0.7,
		color: 'white',
		dashArray: '2',
		fillOpacity: 0.7,
		fillColor: getColor(feature.properties.density)
	};
}

module.exports.getColor = getColor;
module.exports.style = style;
