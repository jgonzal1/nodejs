legend.onAdd = function() {
	const div = L.DomUtil.create('div', 'info legend'),
		grades = [1, 70, 80, 100, 130, 1000],
		labels = ["personas/km²"];
	let from, to;

	for(let i = 0; i < grades.length; i++) {
		from = grades[i];
		to = grades[i + 1];
		labels.push(
			'<i style="background:' + geoJsonStylers.getColor(from + 1) + '">' +
				'<font color=' + geoJsonStylers.getColor(from + 1) + '>__</font>' +
			'</i> ' + from + (to ? '&ndash;' + to : '+'));
	}
	div.innerHTML = [formatDate(gameTimeStamp)]; // labels.join('<br>');
	return div;
};