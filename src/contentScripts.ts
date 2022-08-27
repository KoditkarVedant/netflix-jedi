import logger from "./logger";
import { SKIP_INTRO } from "./popup";

function loadFile() {
  logger.info("May the force be with you!");
}

function skipIntro() {
  setTimeout(() => {
    const skipIntroButton = document.querySelector<HTMLButtonElement>(
      ".watch-video--skip-content-button"
    );

    if (skipIntroButton) {
      skipIntroButton.click();
    }

    skipIntro();
  }, 1000);
}

loadFile();
chrome.storage.sync.get([SKIP_INTRO], (result) => {
  if (result[SKIP_INTRO]) {
    skipIntro();
  }
});
