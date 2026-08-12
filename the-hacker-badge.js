(function () {
  var SITE_URL = "https://hacker11hacker.github.io/";
  var IMAGE_URL = "https://i.ibb.co/twY9KNv3/the-hacker.png"; 

  var style = document.createElement("style");
  style.textContent =
    '.hacker-badge{' +
      'position:fixed;top:50%;left:0;transform:translateY(-50%);z-index:999999;' +
      'display:flex;align-items:center;' +
      'height:110px;' +
      'direction:rtl;background:#0a0c0e;' +
      'border:1.5px solid #35d130;border-left:none;' +
      'border-radius:0 10px 10px 0;' +
      'text-decoration:none;' +
    '}' +
    '.hacker-badge .hacker-img-wrap{' +
      'height:100%;' +
      'display:flex;align-items:center;justify-content:center;' +
      'flex-shrink:0;' +
    '}' +
    '.hacker-badge .hacker-img-wrap img{' +
      'height:100%;width:auto;' +
      'display:block;' +
    '}' +
    '.hacker-badge .hacker-text{' +
      'white-space:nowrap;overflow:hidden;' +
      'max-width:0;opacity:0;padding:0;' +
      'text-align:center;font-family:system-ui,-apple-system,sans-serif;' +
      'font-size:13px;font-weight:700;color:#35d130;' +
      'transition:max-width .3s ease, opacity .2s ease, padding .3s ease;' +
    '}' +
    '.hacker-badge:hover .hacker-text{' +
      'max-width:220px;opacity:1;padding:0 14px;' +
    '}' +
    '.hacker-badge .hacker-text small{' +
      'display:block;font-weight:500;color:#a3b8cc;font-size:10.5px;margin-top:3px;' +
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
