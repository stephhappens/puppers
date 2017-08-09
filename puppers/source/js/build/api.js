Wee.fn.make('api', {
    init: function(conf) {

        this.conf = $.extend({
            baseUrl: 'https://dog.ceo/api/'
        }, conf);
    },

    /**
     * Get all dog breeds
     * @param  {Function} fn
     */
    // breeds: function(fn) {
    //     this.get('breeds/list', fn);
    // },

    /**
     * [get description]
     * @param  {String} url
     * @param  {Function} fn
     */
    get: function(url, fn) {
        Wee.fetch.request({
            url: this.conf.baseUrl + url,
            method: 'get',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            },
            success: function(data) {
                // It's important to try and protect ourselves from errors.  If for some reason
                // the data that is received is not a valid JSON string and we try to parse it as such
                // it will throw an error.  With this try/catch we can catch the error and handle it
                // however we want to
                try {
                    data = JSON.parse(data);

                    // We know that the response is going to include a key `status`, we can use this
                    // to help us handle errors
                    if (data.status === 'success') {
                        fn(data.message);
                    } else {
                        // Error
                    }
                } catch (e) {}
            }
        });
    }
});
