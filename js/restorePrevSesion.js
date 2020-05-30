function askForRestore() {
  const isItem = JSON.parse(localStorage.getItem("state"));
    if (isItem) {
      notificationBackAsk.classList.add("notification--visible");
      notificationFrontTitle.classList.add('blinkTitle');
    }
  }

function restorePrevSession() {
  state = JSON.parse(localStorage.getItem("state"));
}

// window.onload = askForRestore();