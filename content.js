/**
 * content.js — Tab Key Switch Extension
 * Zen Browser / Firefox
 */

(function () {
  "use strict";

  const SKIP_TAGS = new Set([
    "INPUT", "TEXTAREA", "SELECT", "BUTTON", "A", "DETAILS", "SUMMARY",
  ]);

  function isEditableElement(el) {
    if (!el) return false;
    if (SKIP_TAGS.has(el.tagName)) return true;
    if (el.isContentEditable) return true;
    if (el.getAttribute("role") === "textbox") return true;
    return false;
  }

  document.addEventListener(
    "keydown",
    function (e) {
      if (e.key !== "Tab") return;
      if (e.ctrlKey || e.altKey || e.metaKey || e.shiftKey) return;
      const active = document.activeElement;
      if (isEditableElement(active)) return;

      e.preventDefault();
      e.stopImmediatePropagation();

      browser.runtime.sendMessage({ action: "nextTab" });
    },
    true
  );
})();