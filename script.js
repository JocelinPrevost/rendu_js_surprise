
const changecarton=()=> {
  var carton = document.getElementById("carton");
  var secondImage = document.getElementById("carton ouvert");
  var video = document.getElementById("video");
  var body = document.getElementById("body")
  if (carton.src.match("carton")) {
    carton.src = "carton ouvert.png";
    body.classList.add("fond")
    setTimeout(function() {
    video.style.display = "block";
    secondImage.style.display = "none";
    video.play();
  }, 4000);
  } else {
    carton.src = "carton.jpg";
    video.style.display = "none";
    secondImage.style.display = "block";
  }
}


alert("Pensez à baisser le son, screamer qui arrive")
