import logger from "../logger";

const skipIntroSelector = "#skipIntroCheckbox";
export const SKIP_INTRO = "skipIntro";

window.addEventListener("load", function () {
  const skipIntroCheckbox =
    document.querySelector<HTMLInputElement>(skipIntroSelector);

  if (!skipIntroCheckbox) {
    return;
  }

  chrome.storage.sync.get([SKIP_INTRO], function (result) {
    skipIntroCheckbox.checked = !!result[SKIP_INTRO];
  });

  skipIntroCheckbox.addEventListener("change", function () {
    const isEnabled = this.checked;

    const item = { [SKIP_INTRO]: isEnabled };

    chrome.storage.sync.set(item, function () {
      logger.info("Skip intro is " + (isEnabled ? "enabled." : "disabled."));
    });
  });
});
