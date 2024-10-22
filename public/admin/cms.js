document.addEventListener('DOMContentLoaded', function () {
  if (window.CMS) {
    window.CMS.init();
  } else {
    console.error('CMS object is not available');
  }
});