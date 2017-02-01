/**
 * tsvToJson
 *
 * @constructor
 * */
class tsvToJson
{
    private raw:string;
    private lines:any;
    private cols:Array<T>;
    private numRows:number;
    private json:any;
    /**
     * @param {string} uri - TSV URI file
     * @return object
     * */
    constructor (uri:string)
    {
        this.json   = [];
        this.lines  = [];
        this.cols   = [];
        this.numRows   = 0;
        let raw = new XMLHttpRequest();
        raw.open('GET', uri, false);
        raw.onreadystatechange =  () => {
            if (raw.readyState === 4) {
                if (raw.status === 200 || raw.status === 0) {
                    this.raw = raw.responseText;
                    this.lines = this.raw.split(/\r?\n/);
                    let index = 0;
                    let rowObject = {};
                    for (let line of this.lines) {
                        this.numRows++;
                        let row = line.trim(); // truncate first and last space
                        if (row.length === 0) { // if line is empty so continue. Maybe it is an error.
                            continue;
                        }
                        let cols = row.split(/\t+/);
                        // set cols names
                        if (index === 0) {
                            index++;
                            for (let col of cols) {
                                this.cols.push(col);
                            }
                            continue;
                        }
                        // set all rows
                        for (let i = 0; i < this.cols.length; i++) {
                        	console.log();
                            rowObject[this.cols[i]] = cols[i] || undefined;
                        }
                        this.json.push(rowObject);
                    }
                }
                else {
                    console.error('Request status code:' + raw.status)
                }
            }
        };
        raw.send(null);
        return this.json;
    }
}