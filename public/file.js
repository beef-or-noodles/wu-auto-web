/**
 * Created by HIAPAD on 2020/4/17.
 */
var fs = require("fs")
var data = fs.readFileSync('book.sh')
console.log(data.toString());