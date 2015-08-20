// Page script acts as messaging bridge between addon and web content.

window.addEventListener("from-web-to-addon", function (event) {
  self.port.emit('from-web-to-addon', event.detail);
}, false);

self.port.on('from-addon-to-web', function (data) {
  var clonedDetail = cloneInto(data, document.defaultView);
  document.documentElement.dispatchEvent(new CustomEvent(
    'from-addon-to-web', { bubbles: true, detail: clonedDetail }
  ));
});
