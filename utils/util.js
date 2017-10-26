// 编写公共的方法
function transStars(stars) {
  var arr = [];
  var x = Math.floor(stars / 10);
  var y = stars % 10;
  for (var i = 0; i < 5; i++) {
    if(i<x){
      arr.push(1);
    }
    else{
      arr.push(0);
    }
  }
  if(y!=0){
    arr[x]=2;
  }
  return arr;
}
function http(httpUrl,callback){
  wx.request({
    url: httpUrl,
    method: 'GET',
    header: {
      "Content-Type": "application/xml"
    },
    success: function (res) {
      callback(res.data);
      // console.log(res);
    },
    fail: function (res) {
      console.log("error!");
    },
    complete: function () {

    }
  })
}
function convertTocastInfos(casts){
  var castArr=[];
  for(var idx in casts){
    var cast={
      img: casts[idx].avatars ? casts[idx].avatars.large:"",
      name:casts[idx].name
    }
    castArr.push(cast);
  }
  return castArr;
}
function convertToCastString(casts){
  var castjson="";
  for(var idx in casts){
    castjson=castjson+casts[idx].name+"/";
  }
  return castjson.substring(0,castjson.length-2);
}
module.exports = {
  transStars:transStars,
  http:http,
  convertTocastInfos: convertTocastInfos,
  convertToCastString: convertToCastString
}