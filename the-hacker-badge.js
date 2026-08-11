/*!
 * The Hacker Side-Badge — גודל דינאמי לפי התמונה
 * הטמעה: להדביק לפני </body> בכל אתר
 */
(function () {
  var SITE_URL = "https://hacker11hacker.github.io/";
  var IMAGE_URL = "https://i.ibb.co/6R4d1zvK/the-hacker.png"; 

  var style = document.createElement("style");
  style.textContent =
    '.hacker-badge{' +
      'position:fixed;top:50%;left:0;transform:translateY(-50%);z-index:999999;' +
      'display:flex;align-items:center;' +
      /* הגדרות גודל דינאמיות - מתאים את עצמו בדיוק לתמונה */
      'height:auto;width:auto;' +
      'direction:rtl;background:#0a0c0e;' +
      'border:1.5px solid #35d130;border-left:none;' +
      'border-radius:0 12px 12px 0;' +
      'text-decoration:none;' +
      'box-shadow:0 0 12px rgba(53, 209, 48, 0.35), 4px 0 20px rgba(0,0,0,0.6);' +
      'transition:box-shadow .25s ease;' +
    '}' +
    '.hacker-badge:hover{' +
      'box-shadow:0 0 22px rgba(53, 209, 48, 0.6), 6px 0 25px rgba(0,0,0,0.8);' +
    '}' +
    '.hacker-badge .hacker-img-wrap{' +
      'display:flex;align-items:center;justify-content:center;' +
      'flex-shrink:0;' +
    '}' +
    '.hacker-badge .hacker-img-wrap img{' +
      /* התמונה קובעת את הגודל */
      'display:block;width:auto;height:auto;' +
      'max-height:40vh; /* רק למקרה שהתמונה ענקית וגולשת מהמסך */' +
    '}' +
    '.hacker-badge .hacker-text{' +
      'white-space:nowrap;overflow:hidden;' +
      /* טריק לפתיחה דינאמית של טקסט בלי גודל קבוע */
      'max-width:0;opacity:0;padding:0;' +
      'text-align:center;font-family:system-ui,-apple-system,sans-serif;' +
      'font-size:13.5px;font-weight:700;color:#35d130;' +
      'transition:max-width .3s ease, opacity .2s ease, padding .3s ease;' +
    '}' +
    '.hacker-badge:hover .hacker-text{' +
      'max-width:250px;opacity:1;padding:0 15px;' +
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
