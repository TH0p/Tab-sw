// ==UserScript==
// @name           Tab Switcher com TAB
// @description    Troca de abas com Ctrl+Tab aprimorado e Alt+Tab
// @author         Zen Tab Switcher
// ==/UserScript==

(function () {
  "use strict";

  // Aguarda o browser estar pronto
  if (typeof gBrowser === "undefined") return;

  function nextTab() {
    const tabs = gBrowser.tabs;
    const current = gBrowser.selectedTab;
    const idx = Array.from(tabs).indexOf(current);
    const nextIdx = (idx + 1) % tabs.length;
    gBrowser.selectedTab = tabs[nextIdx];
  }

  function prevTab() {
    const tabs = gBrowser.tabs;
    const current = gBrowser.selectedTab;
    const idx = Array.from(tabs).indexOf(current);
    const prevIdx = (idx - 1 + tabs.length) % tabs.length;
    gBrowser.selectedTab = tabs[prevIdx];
  }

  // Escuta teclas globalmente na janela do chrome
  window.addEventListener(
    "keydown",
    (e) => {
      // Alt + → = próxima aba
      if (e.altKey && e.key === "ArrowRight" && !e.ctrlKey && !e.shiftKey) {
        e.preventDefault();
        e.stopPropagation();
        nextTab();
      }
      // Alt + ← = aba anterior
      if (e.altKey && e.key === "ArrowLeft" && !e.ctrlKey && !e.shiftKey) {
        e.preventDefault();
        e.stopPropagation();
        prevTab();
      }
    },
    true // captura na fase de capture
  );
})();