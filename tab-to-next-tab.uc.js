(() => {
  "use strict";

  // Tab To Next Tab — Zen Browser / Sine
  // Runs in the browser chrome context.
  const FLAG = "__tabToNextTabInstalled";

  if (window[FLAG]) {
    return;
  }

  function onKeyDown(event) {
    // Only plain TAB.
    if (
      event.key !== "Tab" ||
      event.shiftKey ||
      event.ctrlKey ||
      event.altKey ||
      event.metaKey
    ) {
      return;
    }

    const browser = window.gBrowser;

    if (!browser || !browser.tabs || browser.tabs.length < 2) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    const currentIndex = browser.tabContainer.selectedIndex;
    const nextIndex = (currentIndex + 1) % browser.tabs.length;

    browser.selectedTab = browser.tabs[nextIndex];
  }

  window.addEventListener("keydown", onKeyDown, true);

  window[FLAG] = {
    unload() {
      window.removeEventListener("keydown", onKeyDown, true);
      delete window[FLAG];
    }
  };
})();
