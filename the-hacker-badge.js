/*!
 * The Hacker Badge — ווידג'ט צף מעוצב
 * הטמעה: להדביק לפני </body> בכל אתר
 */
(function () {
  // 1. הקישור לאתר שלך
  var SITE_URL = "https://hacker11hacker.github.io/";
  
  // 2. הדבק כאן את הקישור הישיר לתמונה לאחר שתעלה אותה ל-ImgBB:
  var IMAGE_URL = "https://i.ibb.co/6R4d1zvK/the-hacker.png"; 

  var style = document.createElement("style");
  style.textContent =
    '.hacker-badge{position:fixed;bottom:18px;left:18px;z-index:999999;' +
    'display:flex;align-items:center;height:46px;width:46px;overflow:hidden;' +
    'direction:rtl;background:#0a0c0e;border:1px solid #35d130;' +
    'border-radius:100px;text-decoration:none;' +
    'box-shadow:0 0 10px rgba(53, 209, 48, 0.25), 0 10px 25px -10px rgba(0,0,0,0.8);' +
    'transition:width .3s cubic-bezier(.2,.9,.3,1), box-shadow .25s ease, transform .2s ease;}' +
    '.hacker-badge:hover{width:215px;box-shadow:0 0 20px rgba(53, 209, 48, 0.5), 0 14px 30px -10px rgba(0,0,0,0.9);transform:translateY(-2px);}' +
    '.hacker-badge .hacker-logo-wrap{width:46px;height:46px;flex:0 0 46px;' +
    'display:flex;align-items:center;justify-content:center;' +
    'background:#000;border-radius:50%;overflow:hidden;border:1px solid rgba(53,209,48,0.4);}' +
    '.hacker-badge .hacker-logo-wrap img{width:100%;height:100%;object-fit:cover;}' +
    '.hacker-badge .hacker-text{white-space:nowrap;opacity:0;flex:1;min-width:0;' +
    'text-align:center;padding:0 12px;font-family:system-ui,-apple-system,sans-serif;' +
    'font-size:13px;font-weight:700;color:#35d130;' +
    'transition:opacity .2s ease .05s;}' +
    '.hacker-badge:hover .hacker-text{opacity:1;}' +
    '.hacker-badge .hacker-text small{display:block;font-weight:500;color:#a3b8cc;font-size:10.5px;margin-top:2px;}' +
    '@media (max-width:480px){.hacker-badge{bottom:12px;left:12px;}}';
  document.head.appendChild(style);

  var badge = document.createElement("a");
  badge.className = "hacker-badge";
  badge.href = SITE_URL;
  badge.target = "_blank";
  badge.rel = "noopener";
  badge.setAttribute("aria-label", "פותח ע״י the hacker — למעבר לאתר");
  badge.innerHTML =
    '<span class="hacker-logo-wrap"><img src="' + IMAGE_URL + '" alt="the hacker"></span>' +
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