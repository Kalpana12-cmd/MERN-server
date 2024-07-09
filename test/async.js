function fetchData(callback){
setTimeout(() => {
    callback('admin')
},1000);
}
module.exports=fetchData;