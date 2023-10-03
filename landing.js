var btn1 = document.getElementsById("body-posture");
var btn2 = document.getElementsById("facial-expressions");
var btn3 = document.getElementsById("vocal-expressions");

var div1 = document.getElementsById("feature-body");
var div2 = document.getElementsById("feature-facial");
var div3 = document.getElementsById("feature-vocal");

btn1.addEventListener("click", function() {
  div1.style.display = "block";
  div2.style.display = "none";
  div3.style.display = "none";
});

btn2.addEventListener("click", function() {
  div1.style.display = "none";
  div2.style.display = "block";
  div3.style.display = "none";
});

btn3.addEventListener("click", function() {
  div1.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "block";
});

// let slides = document.getElementsByClassName("container");  
// let slides = document.getElementsByClassName("imp"); 
//  let slides = document.getElementsByClassName("feature-content");