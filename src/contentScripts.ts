import logger from "./logger";

loadFile();
skipIntro();

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
