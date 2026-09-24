// Tab To Next Tab
// Zen Browser 1.22.x / Firefox 156.x
//
// Plain TAB -> next tab.
// Shift+TAB / Ctrl+TAB / Alt+TAB / Meta+TAB are untouched.

(() => {
  "use strict";

  const INSTALL_FLAG = Symbol.for("maxwell.tabToNextTab.installed");

  if (window[INSTALL_FLAG]) {
    return;
  }

  const getBrowser = () => {
    // Zen/Firefox browser window exposes gBrowser in the chrome context.
    return window.gBrowser || window._gBrowser || null;
  };

  const switchToNextTab = () => {
    const browser = getBrowser();

    if (!browser || !browser.tabs || browser.tabs.length < 2) {
      return;
    }

    const selected = browser.selectedTab;
    if (!selected) {
      return;
    }

    const tabs = Array.from(browser.tabs);
    const currentIndex = tabs.indexOf(selected);

    if (currentIndex < 0) {
      return;
    }

    const nextIndex = (currentIndex + 1) % tabs.length;
    const nextTab = tabs[nextIndex];

    if (nextTab) {
      browser.selectedTab = nextTab;
    }
  };

  const onKeyDown = (event) => {
    // ONLY plain Tab.
    if (
      event.key !== "Tab" ||
      event.shiftKey ||
      event.ctrlKey ||
      event.altKey ||
      event.metaKey
    ) {
      return;
    }

    // Stop Firefox/Zen from using Tab for focus navigation.
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    switchToNextTab();
  };

  // Capture phase is intentional: this runs before normal page/UI handlers.
  window.addEventListener("keydown", onKeyDown, true);

  window[INSTALL_FLAG] = {
    unload() {
      window.removeEventListener("keydown", onKeyDown, true);
      delete window[INSTALL_FLAG];
    }
  };
})();
