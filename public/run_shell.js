/**
 * Created by Administrator on 2020/4/17.
 */
var child = require('child_process')
child.execFile('ping',['www.smartwu.top'],function (err,stdout,stderr) {
    console.log("stdout:",stdout)
    console.log("stderr:",stderr)
})
