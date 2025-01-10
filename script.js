const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");

function initializeClock() {
  const now = new Date();
  const s_deg = now.getSeconds() * 6;
  const m_deg = now.getMinutes() * 6 + (s_deg / 60);
  const h_deg = now.getHours() * 30 + (m_deg / 12);

  updateHands(s_deg, m_deg, h_deg);
}

function updateHands(s_deg, m_deg, h_deg) {
  seconds.style.transform = `rotate(${s_deg}deg)`;
  minutes.style.transform = `rotate(${m_deg}deg)`;
  hours.style.transform = `rotate(${h_deg}deg)`;
}

function runClock() {
  const now = new Date();
  const s_deg = now.getSeconds() * 6;
  const m_deg = now.getMinutes() * 6 + (s_deg / 60);
  const h_deg = now.getHours() * 30 + (m_deg / 12);

  updateHands(s_deg, m_deg, h_deg);
}

initializeClock();
setInterval(runClock, 1000);
