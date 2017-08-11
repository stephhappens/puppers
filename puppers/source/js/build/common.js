Wee.fn.make('common', {
	init: function() {
		Wee.api.init({
			baseUrl: 'whafadsf'
		});
		
		Wee.api.breeds(function(data) {
    		if (data.length) {
		        $('ref:doggoSelect').html(
            		$.view.render('doggoOptions', {
		                doggos: data
            		})
        		);
    		}
		});
	}
});
