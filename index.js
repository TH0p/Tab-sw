(() => {
  "use strict";

  if (window.__tabToNextTabLoaded) return;
  window.__tabToNextTabLoaded = true;

  function nextTab(event) {
    if (
      event.key !== "Tab" ||
      event.shiftKey ||
      event.ctrlKey ||
      event.altKey ||
      event.metaKey
    ) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    if (typeof gBrowser !== "undefined" && gBrowser.tabs?.length > 1) {
      gBrowser.tabContainer.advanceSelectedTab(1, true);
    }
  }

  window.addEventListener("keydown", nextTab, true);
})();
