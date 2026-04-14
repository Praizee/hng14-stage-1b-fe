const timeElement = document.querySelector('[data-testid="test-user-time"]');

const updateTime = () => {
  if (!timeElement) {
    return;
  }

  timeElement.textContent = Date.now().toString();
};

updateTime();
setInterval(updateTime, 1000);

