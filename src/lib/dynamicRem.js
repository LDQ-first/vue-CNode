((doc, win) => {
    const docEl = doc.documentElement,
          resizeEvt = 'onorientationchange' in win ? 'onorientationchange': 'resize',
          recalc = () => {
              const clientWidth = docEl.clientWidth;
              if(!clientWidth) {
                  return;
              }
              if(clientWidth >= 750) {
                  docEl.style.fontSize = '100px'
              }
              else {
                  docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
              }
          };
        if(!doc.addEventListener) {
            return;
        }
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

