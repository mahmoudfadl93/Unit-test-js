function filtername(name) {
  if (name === undefined) {
    name = "unknown";
  }
  if (name.startsWith(" ") || name.endsWith(" ")) {
    name = name.trim();
  }
  if (name.length > 12) {
    name = name.substring(0, 12);
  }
  if (name.startsWith("_")) {
    name = name.substring(1);
  }
  if (name.startsWith("___") ) {
     new Error('should be ');
  }
  return name;
}

module.exports = filtername;
