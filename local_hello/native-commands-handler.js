! function(t) {
  function e(o) {
    if(n[o]) return n[o].exports;
    var r = n[o] = {
      exports: {},
      id: o,
      loaded: !1
    };
    return t[o].call(r.exports, r, r.exports, e), r.loaded = !0, r.exports
  }
  var n = {};
  return e.m = t, e.c = n, e.p = "", e(0)
}

([function(t, e) {
  "use strict";
  var n = document.getElementById("nativeCommands"),
    o = [];
  document.addEventListener("executeCommand", function(t) {
    var e = n.getAttribute("execute"),
      r = o.find(function(t) {
        return t.name === e
      });
    r && r.action()
  }), window.handsfreeCommands = function(t) {
    o = t, n.setAttribute("commands", JSON.stringify(t)), document.dispatchEvent(new Event("nativeCommands"))
  }
}]);