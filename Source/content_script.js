function replace() {
  var seenElems = document.getElementsByClassName('seen');

  for (var i = 0; i < seenElems.length; ++i) {
    var seen = seenElems[i].firstChild.nextSibling.firstChild;
    seen.nodeValue = seen.nodeValue.replace('Seen', 'Violently rejected');
  }
}

setInterval(replace, 100);
