const backToTopBtn = document.getElementById("back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
}

backToTopBtn.onclick = function () {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
};
