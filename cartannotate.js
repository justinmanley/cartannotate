var cartannotate = function(map, doc) {
	var control = L.Control.extend({
		options: { position: 'topright' },
		onAdd: function(map) {
			var container = L.DomUtil.create('div', 'cartannotate-control-container');
			var textControl = L.DomUtil.create('div', 'cartannotate-text-control', container);
			return container;
		}
	});

	var FullPageCanvas = L.CanvasLayer.extend({
		render: function() {
			//		
		}
	});
	var annotationsCanvas = new FullPageCanvas();	
	annotationsCanvas.addTo(map);

	map.on('click', function(event) {
		var canvas = new fabric.Canvas(annotationsCanvas.getCanvas().id);
		var rect = new fabric.Rect({
			left: 100,
			top: 100,
			fill: 'red',
			width: 20,
			height: 20
		});
		var text = new fabric.Text('Hello', { left: 100, top: 100 });
		canvas.add(rect);
		canvas.add(text);
	});	

	return {
		'control': control
	};
};