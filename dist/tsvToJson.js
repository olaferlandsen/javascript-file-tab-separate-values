/**
 * tsvToJson
 *
 * @constructor
 * */
var tsvToJson = (function () {
    /**
     * @param {string} uri - TSV URI file
     * @return object
     * */
    function tsvToJson(uri) {
        var _this = this;
        this.json = [];
        this.lines = [];
        this.cols = [];
        this.numRows = 0;
        var raw = new XMLHttpRequest();
        raw.open('GET', uri, false);
        raw.onreadystatechange = function () {
            if (raw.readyState === 4) {
                if (raw.status === 200 || raw.status === 0) {
                    _this.raw = raw.responseText;
                    _this.lines = _this.raw.split(/\r?\n/);
                    var index = 0;
                    var rowObject = {};
                    for (var _i = 0, _a = _this.lines; _i < _a.length; _i++) {
                        var line = _a[_i];
                        _this.numRows++;
                        var row = line.trim(); // truncate first and last space
                        if (row.length === 0) {
                            continue;
                        }
                        var cols = row.split(/\t+/);
                        // set cols names
                        if (index === 0) {
                            index++;
                            for (var _b = 0, cols_1 = cols; _b < cols_1.length; _b++) {
                                var col = cols_1[_b];
                                _this.cols.push(col);
                            }
                            continue;
                        }
                        // set all rows
                        for (var i = 0; i < _this.cols.length; i++) {
                            console.log();
                            rowObject[_this.cols[i]] = cols[i] || undefined;
                        }
                        _this.json.push(rowObject);
                    }
                }
                else {
                    console.error('Request status code:' + raw.status);
                }
            }
        };
        raw.send(null);
        return this.json;
    }
    return tsvToJson;
}());
