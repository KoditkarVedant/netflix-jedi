import logger from "../logger";

const skipIntroSelector = "#skipIntroCheckbox";
const SKIP_INTO = "skipIntro";

window.addEventListener("load", function () {
  const skipIntroCheckbox =
    document.querySelector<HTMLInputElement>(skipIntroSelector);

  if (!skipIntroCheckbox) {
    return;
  }

  chrome.storage.sync.get(["skipIntro"], function (result) {
    skipIntroCheckbox.checked = !!result[SKIP_INTO];
  });

  skipIntroCheckbox.addEventListener("change", function () {
    const isEnabled = this.checked;

    const item = { [SKIP_INTO]: isEnabled };

    chrome.storage.sync.set(item, function () {
      logger.info("Skip intro is " + (isEnabled ? "enabled." : "disabled."));
    });
  });
});
