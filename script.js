
function showContent(component) {
  var components = document.getElementsByClassName('component');
  for (var i = 0; i < components.length; i++) {
    components[i].classList.add('hidden');
  }
  document.getElementById(component).classList.remove('hidden');
}
