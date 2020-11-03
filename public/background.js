let activeIndex = 0;

const iconPath = ["Yomu.png", "Yomu.png"];
const scriptName = ["disable.js", "main.js"];

function updateState() {
  activeIndex ^= 1;

  chrome.browserAction.setIcon({ path: iconPath[activeIndex] });
  chrome.tabs.executeScript(null, { file: scriptName[activeIndex] });
}

chrome.browserAction.onClicked.addListener(updateState);
