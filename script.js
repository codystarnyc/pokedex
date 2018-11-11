var mySlide;

function statSlide(){
mySlide=setTimeout(function() {
    document.getElementById('graph').classList.remove('hidden');
    document.getElementById('graph').classList.add('animated');
    document.getElementById('graph').classList.add('slideInLeft')
  }, 1000);
}
statSlide();