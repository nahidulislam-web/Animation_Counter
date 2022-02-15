var project = document.getElementById('papa');
var client = document.getElementById('bari');
var achive = document.getElementById('jaa');

var index = 0;
  let y = setInterval(fu, 15);
  function fu(){
  index++;
  if(index == 190){
    clearInterval(y);
  }
  project.innerHTML = index + '+';
  }



  var index2 = 0;
  let z = setInterval(fun, 10);
  function fun(){
  index2++;
  if(index2 == 230){
    clearInterval(z);
  }
  client.innerHTML = index2 + '+';
  }


  var index3 = 0;
  let k = setInterval(fun2, 09);
  function fun2(){
  index3++;
  if(index3 == 208){
    clearInterval(k);
  }
  achive.innerHTML = index3 + '+';
  }