(function() {
  const originalTitle = document.title;
  const ws = new WebSocket('ws://' + window.location.host);
  
  ws.onmessage = function(msg) {
    if (msg.data === 'reload') {
      window.location.reload();
    } else if (msg.data === 'building') {
      document.title = '🔄 ' + originalTitle;
    } else if (msg.data === 'built') {
      document.title = originalTitle;
    }
  };
  
  ws.onclose = function() {
    console.log('Live reload disconnected');
  };
})();
