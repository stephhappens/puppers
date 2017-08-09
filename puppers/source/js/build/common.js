// Controller documentation available at https://www.weepower.com/script/core#fnmake

Wee.fn.make('common', {
	_construct: function() {
		// ...
	},
	init: function() {
		this.$private.method();
	}
}, {
	method: function(populateDoggos) {
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
