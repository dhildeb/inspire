import { ProxyState } from "../AppState.js"

export function showTime() {
  let date = new Date()
  let h = date.getHours() // 0 - 23
  let m = date.getMinutes() // 0 - 59
  let session = "AM"
  let time = 0

  m = (m < 10) ? "0" + m : m

  if (ProxyState.standardTime) {
    if (h == 0) {
      h = 12
    }

    if (h > 12) {
      h = h - 12
      session = "PM"
    }
    time = h + ":" + m + " " + session
  } else {
    time = h + "" + m
  }
  document.getElementById("MyClockDisplay").innerText = time
  document.getElementById("MyClockDisplay").textContent = time

  setTimeout(showTime, 1000)
}