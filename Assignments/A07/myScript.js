// A07 Javascript functions
// ICS2015 Fall2015
// Erick Recaido

// parameter: html element
// return: array of classes of the element
function getClasses(elem) {
  var x = elem.className;
  if (x == null || x == "") {
    return x;
  }
  var x = x.split(" ")
  return x;
}

// parameter: html element, class to add to element
// return classes of elem
function addClasses(elem, className) {
  var x = elem.className;
  if (x == null || x == "") {
    elem.className = className;
  }
  elem.className.add(className);
  return x;
}

