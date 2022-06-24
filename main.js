var bal = document.querySelector("#bal");
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

    if(subChange.innerHTML<1000){
      ad+=10;
      subChange.textContent=100+(ad*10);
    }
    console.log(bal.innerHTML);
    console.log(subChange.innerHTML);
   
})

subtract.addEventListener("click",function(){
    //lov-=10;

    if(subChange.innerHTML>0){
        ad-=10;
        subChange.textContent=100+(ad*10);
    }
})
// Balance and setting table random values Section //

var z = document.getElementById("sub");
z.addEventListener("click", function() {
  if(bal.innerHTML!=0){
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
          big+=5000+(ad*500);
          h1.textContent = "Big Win " +big;
        }
        
        else{
          h1.textContent = "Gamba";
        }
      }
      if (two.innerHTML == y.innerHTML && (i > 3 && i < 7)) {
        mount++;
        console.log(mount + "match");
        if (mount == 3) {
          big+=5000+(ad*500);
          h1.textContent = "Big Win " +big;
        }
      }
      if (three.innerHTML == y.innerHTML && i>6) {
        hount++;
        if (hount == 3) {
          big+=5000+(ad*500);
          h1.textContent = "Big Win " +big;
        }
      }
    }

    count=0;
    mount=0;
    hount=0;
    lov+=10+ad;
    bal.innerHTML= 10000-lov+big;
  }
  if(bal.innerHTML<=0){
    document.querySelector("#bal").innerHTML = 0;
    z.setAttribute("disabled","");
  }
 
 
  /*
    */if (bal.innerHTML < 1000) {
     if (bal.innerHTML < subChange.innerHTML) {
      add.setAttribute("disabled", "");
      subChange.innerHTML = bal.innerHTML;
      console.log(ad);
      ad= (subChange.innerHTML/10);
      console.log(ad);
    }
    subtract.addEventListener("click",function() {
      if (bal.innerHTML > subChange.innerHTML) {
        add.removeAttribute("disabled", "")
      }
      if (bal.innerHTML < subChange.innerHTML) {
        add.setAttribute("disabled", "");
    }})
    if (bal.innerHTML < subChange.innerHTML) {
        add.setAttribute("disabled", "");
    }
    add.addEventListener("click",function() {
      if (bal.innerHTML < subChange.innerHTML) {
        add.setAttribute("disabled", "");
        subChange.innerHTML = bal.innerHTML;
      }
    })
    }
})

