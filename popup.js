const checkbox = document.getElementById("toggle");

chrome.storage.sync.get("enabled", data => {
  checkbox.checked = data.enabled !== false;
});

checkbox.addEventListener("change", () => {
  chrome.storage.sync.set({ enabled: checkbox.checked }, () => {
    chrome.tabs.reload();
  });
});
