var bal = document.querySelector("#bal");
var count = 0;
var mount = 0;
var hount = 0;
var lov=0;
var big =0;
var spinWin=0;
// Bet Number Change Section //

var ad=0;
var subtract = document.querySelector("#min");
var add = document.querySelector("#max");
var subChange = document.querySelector("#subChange");
var arr=["red","aqua","lime","yellow","orange","brown","plum","darkcyan","blueviolet","seagreen","mediumpurple","midnightblue","gold","greenyellow"
,"burlywood","skyblue","salmon","slategray","teal","turquoise"];
add.addEventListener("click",function(){

    if(subChange.innerHTML<1000 ){
      console.log(ad+" match");
      ad+=10;
      subChange.textContent=100+(ad*10);
    }
    console.log(ad+" match");
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

  if(bal.innerHTML!=0 && subChange.innerHTML!=0){
    for (var i = 1; i < 10; i++) {
      lov+=10+ad;
      let colorRandom = Math.floor(Math.random() * 20);
      var y = document.getElementsByClassName(i)[0];
      y.style.backgroundColor = arr[colorRandom];
      var one = document.getElementsByClassName(1)[0].style.backgroundColor;
      var two = document.getElementsByClassName(4)[0].style.backgroundColor;
      var three = document.getElementsByClassName(7)[0].style.backgroundColor;
      var h1 = document.querySelector("h1");

    if(one ==  y.style.backgroundColor && i<4){
    count++;
      if (count==3) {
        big+=5000+(ad*500);
        spinWin+= 5000+(ad*500); 
        h1.textContent = "Big Win " +spinWin;
      }
      
      else{
        h1.textContent = "Gamba";
      }
    }
    if (two ==  y.style.backgroundColor && (i > 3 && i < 7)) {
      mount++;
      if (mount == 3) {
        big+=5000+(ad*500);
        spinWin+= 5000+(ad*500);
        h1.textContent = "Big Win " +spinWin;
      }
    }
    if (three ==  y.style.backgroundColor && i>6) {
      hount++;
      if (hount == 3) {
        big+=5000+(ad*500);
        spinWin+= 5000+(ad*500);
        h1.textContent = "Big Win " +spinWin;
      }
    }
  }
    spinWin=0;
    count=0;
    mount=0;
    hount=0;
    lov+=10+ad;
    bal.innerHTML= 15000-lov+big;
  }
  if(bal.innerHTML<=0){
    document.querySelector("#bal").innerHTML = 0;
    z.setAttribute("disabled","");
    subtract.style.cursor = "default";
    subtract.setAttribute("disabled","");
  }
 
 
   if (bal.innerHTML < 1000) {
     if (bal.innerHTML < subChange.innerHTML) {
      add.setAttribute("disabled", "");
      subChange.innerHTML = bal.innerHTML;
      console.log(ad+" hatch");
      ad= (subChange.innerHTML/10)-10;
      console.log(ad+" hatch");
    }
    subtract.addEventListener("click",function() {
      if (bal.innerHTML > subChange.innerHTML) {
        add.removeAttribute("disabled", "")
      }
      if (bal.innerHTML < subChange.innerHTML) {
        add.setAttribute("disabled", "");
    }
  })
    /*if (bal.innerHTML <= subChange.innerHTML) {
        add.setAttribute("disabled", "");
    }*/
    add.addEventListener("click",function() {
      if (bal.innerHTML <= subChange.innerHTML) {
        add.setAttribute("disabled", "");
        subChange.innerHTML = bal.innerHTML;
      }
    })
    
    }
  else{
        add.addEventListener("click",function() {
        console.log(ad);
        subChange.innerHTML = 100+(ad*10);
        add.removeAttribute("disabled", "");
        console.log(ad);
        });
    }
})
