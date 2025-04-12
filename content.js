function hideShorts() {
  const sections = document.querySelectorAll("ytd-rich-section-renderer.style-scope.ytd-rich-grid-renderer");
  sections.forEach(section => {
    if (section.textContent.toLowerCase().includes("shorts")) {
      section.style.display = "none";
    }
  });
}

function observeAndHide() {
  const observer = new MutationObserver(hideShorts);
  observer.observe(document.body, { childList: true, subtree: true });
  hideShorts();
}

chrome.storage.sync.get("enabled", data => {
  if (data.enabled !== false) {
    observeAndHide();
  }
});
