/*!
 * The Hacker Side-Badge — ווידג'ט מלבני בצד שמאל
 * הטמעה: להדביק לפני </body> בכל אתר
 */
(function () {
  // 1. הקישור לאתר שלך
  var SITE_URL = "https://hacker11hacker.github.io/";
  
  // 2. הקישור לתמונה שלך ב-ImgBB (או היכן שהעלית אותה):
  var IMAGE_URL = "https://i.ibb.co/6R4d1zvK/the-hacker.png"; 

  var style = document.createElement("style");
  style.textContent =
    '.hacker-badge{' +
      'position:fixed;top:50%;left:0;transform:translateY(-50%);z-index:999999;' +
      'display:flex;align-items:center;' +
      'height:140px;width:46px;overflow:hidden;' +
      'direction:rtl;background:#0a0c0e;' +
      'border:1.5px solid #35d130;border-left:none;' +
      'border-radius:0 12px 12px 0;' +
      'text-decoration:none;' +
      'box-shadow:0 0 12px rgba(53, 209, 48, 0.35), 4px 0 20px rgba(0,0,0,0.6);' +
      'transition:width .3s cubic-bezier(.2,.9,.3,1), box-shadow .25s ease;' +
    '}' +
    '.hacker-badge:hover{' +
      'width:235px;' +
      'box-shadow:0 0 22px rgba(53, 209, 48, 0.6), 6px 0 25px rgba(0,0,0,0.8);' +
    '}' +
    '.hacker-badge .hacker-img-wrap{' +
      'width:46px;height:100%;flex:0 0 46px;' +
      'display:flex;align-items:center;justify-content:center;' +
      'background:#000;' +
    '}' +
    '.hacker-badge .hacker-img-wrap img{' +
      'width:100%;height:100%;object-fit:cover;' +
    '}' +
    '.hacker-badge .hacker-text{' +
      'white-space:nowrap;opacity:0;flex:1;min-width:0;' +
      'text-align:center;padding:0 12px;' +
      'font-family:system-ui,-apple-system,sans-serif;' +
      'font-size:13.5px;font-weight:700;color:#35d130;' +
      'transition:opacity .2s ease .08s;' +
    '}' +
    '.hacker-badge:hover .hacker-text{' +
      'opacity:1;' +
    '}' +
    '.hacker-badge .hacker-text small{' +
      'display:block;font-weight:500;color:#a3b8cc;font-size:11px;margin-top:4px;' +
    '}';
  document.head.appendChild(style);

  var badge = document.createElement("a");
  badge.className = "hacker-badge";
  badge.href = SITE_URL;
  badge.target = "_blank";
  badge.rel = "noopener";
  badge.setAttribute("aria-label", "פותח ע״י the hacker — לחצו כאן למעבר לאתר");
  badge.innerHTML =
    '<span class="hacker-img-wrap"><img src="' + IMAGE_URL + '" alt="the hacker"></span>' +
    '<span class="hacker-text">פותח ע״י the hacker<small>לחצו כאן למעבר לאתר</small></span>';

  function mount() {
    if (!document.body.contains(badge)) {
      document.body.appendChild(badge);
    }
  }
  if (document.body) {
    mount();
  } else {
    document.addEventListener("DOMContentLoaded", mount);
  }
})();
