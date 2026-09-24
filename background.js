/**
 * background.js — Tab Key Switch Extension
 * Zen Browser / Firefox
 */

browser.runtime.onMessage.addListener(async (message) => {
  if (message.action !== "nextTab") return;

  const tabs = await browser.tabs.query({ currentWindow: true });
  if (tabs.length <= 1) return;

  const activeIndex = tabs.findIndex((t) => t.active);
  if (activeIndex === -1) return;

  const nextIndex = (activeIndex + 1) % tabs.length;
  const nextTab = tabs[nextIndex];

  await browser.tabs.update(nextTab.id, { active: true });
});