var cartannotate = (function() {
	var data = {};

	var control = L.Control.extend({
		options: { position: 'topright' },
		onAdd: function(map) {
			var container = L.DomUtil.create('div', 'cartannotate-control-container');
			var textControl = L.DomUtil.create('div', 'cartannotate-text-control', container);
			return container;
		}
	});

	var initialize = function(map, doc) {
		data.map = map;
		data.doc = doc;

		var FullPageCanvas = L.CanvasLayer.extend({
			render: function() {
				var canvas = new fabric.Canvas(this.getCanvas().id);
				this.renderText(canvas, 'HELLO!');	
			},
			renderText: function(canvas, text) {
				var text = new fabric.Text(text, { left: 100, top: 100 });
				canvas.add(text);
			}
		});

		var annotationsCanvas = new FullPageCanvas();
		annotationsCanvas.getCanvas().id = 'cartannotate-canvas';	
		annotationsCanvas.addTo(map);

		map.on('click', function(event) {
			//
		});

		return {
			'control': control
		};	
	}

	return {
		'initialize': initialize
	}
}());