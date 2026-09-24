(function () {
  console.log("[tab-switch] content script injetado em", location.href);

  function isEditable(el) {
    if (!el) return false;
    const tag = el.tagName ? el.tagName.toLowerCase() : "";
    return (
      el.isContentEditable ||
      tag === "input" ||
      tag === "textarea" ||
      tag === "select"
    );
  }

  window.addEventListener(
    "keydown",
    (e) => {
      if (e.key === "Tab" && !e.ctrlKey && !e.altKey && !e.metaKey && !e.shiftKey) {
        console.log("[tab-switch] Tab detectado, editable:", isEditable(document.activeElement));
        if (!isEditable(document.activeElement)) {
          e.preventDefault();
          e.stopImmediatePropagation();
          browser.runtime.sendMessage({ action: "nextTab" });
        }
      }
    },
    true
  );
})();
