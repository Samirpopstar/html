var count = 0;
var mount = 0;
var hount = 0;
var lov=0;
var big =0;

// Bet Number Change Section //

var ad=0;
var subtract = document.querySelector("#min");
var add = document.querySelector("#max");
var subChange = document.querySelector("#subChange");

add.addEventListener("click",function(){
    //lov+=10;
    ad+=10;
    console.log(ad);
    subChange.textContent=100+(ad*10);
})

subtract.addEventListener("click",function(){
    //lov-=10;

    if(subChange.innerHTML>0){
        ad-=10;
        console.log(ad);
        subChange.textContent=100+(ad*10);
        console.log(subChange.innerHTML);  
    }
})
// Balance and setting table random values Section //

var z = document.getElementById("sub");
z.addEventListener("click", function() {
  for (var i = 1; i < 10; i++) {
    console.log(ad);
    lov+=10+ad;
    let x = Math.floor(Math.random() * 20) + 1;
    var y = document.getElementsByClassName(i)[0];
     y.textContent = x;
     var one = document.getElementsByClassName(1)[0];
     var two = document.getElementsByClassName(4)[0];
     var three = document.getElementsByClassName(7)[0];
     
     var h1 = document.querySelector("h1")
    if(one.innerHTML == y.innerHTML && i<4){
      count++;
      if (count==3) {
        h1.textContent = "Big Win";
        big+=5000;
      }
      
      else{
        h1.textContent = "Gamba";
      }
    }
    if (two.innerHTML == y.innerHTML && (i > 3 && i < 7)) {
      mount++;
      console.log(mount + "match");
      if (mount == 3) {
        h1.textContent = "Big Win";
        big+=5000;
      }
    }
    if (three.innerHTML == y.innerHTML && i>6) {
      hount++;
      if (hount == 3) {
        h1.textContent = "Big Win";
        big+=5000;
      }
    }
  }
  count=0;
  mount=0;
  hount=0;
  lov+=10;
  console.log(lov);
  console.log(big);
  var bal = document.querySelector("#bal").innerHTML = 10000-lov+big;
  if(bal<=0){
    document.querySelector("#bal").innerHTML = 0;
    z.setAttribute("disabled","");
  }
})
 
