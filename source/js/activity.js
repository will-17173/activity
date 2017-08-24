var jsonp = require('./jsonp');

function Activity() {

}

Activity.prototype = {
    getActInfo: function(params) {
        jsonp('getActInfo', {
            actId: params.actId
        });





        // return jsonp('getActInfo', {
        //     actId: params.actId
        // });
    }
}

module.exports = Activity;