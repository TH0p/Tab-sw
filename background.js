console.log("[tab-switch] background script carregado");

browser.runtime.onMessage.addListener((message) => {
  console.log("[tab-switch] mensagem recebida:", message);
  if (message.action === "nextTab") {
    switchTab(1);
  }
});

async function switchTab(direction) {
  const tabs = await browser.tabs.query({ currentWindow: true });
  console.log("[tab-switch] abas encontradas:", tabs.length);
  const activeIndex = tabs.findIndex((t) => t.active);
  if (activeIndex === -1) return;
  const nextIndex = (activeIndex + direction + tabs.length) % tabs.length;
  browser.tabs.update(tabs[nextIndex].id, { active: true });
}
