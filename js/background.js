// background.js
const randomColor = Math.floor(Math.random()*16777215).toString(16);
const color = `${'#' + randomColor}`;

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log(`color: ${color}`);
});

