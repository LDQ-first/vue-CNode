((doc, win) => {
    const docEl = doc.documentElement,
          resizeEvt = 'onorientationchange' in win ? 'orientationchange': 'resize',
          recalc = () => {
              const clientWidth = docEl.clientWidth;
              if(!clientWidth) {
                  return;
              }
              if(clientWidth >= 1000) {
                  docEl.style.fontSize = '100px'
              }
              else if(clientWidth <= 640) {
                  docEl.style.fontSize = '64px'
              }
              else {
                  docEl.style.fontSize = 100 * (clientWidth / 1000) + 'px';
              }
          };
        if(!doc.addEventListener) {
            return;
        }
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

