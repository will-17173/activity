var host = 'http://p.act.17173.com/api/v2/activity/',
    api = require('./api');

module.exports = function(type, params) {
    var url = host + api[type];
    if (type == 'myActLog' || type == 'getTypeWinnerList') {
        url = api[type];
    }
    if (params.actId) {
        url = url.replace(/actId/g, params.actId);
    }
    if (params.lotteryId) {
        url = url.replace(/lotteryId/g, params.lotteryId);
    }
    if (params.fieldSetId) {
        url = url.replace(/fieldSetId/g, params.fieldSetId);
    }

    $.ajax({
        url: url,
        dataType: 'jsonp',
        success: function(res) {
            // handleData(res);
        }
    });
};