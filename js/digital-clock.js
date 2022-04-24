console.log("Digital Clock");

let d;

function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return `${time}`;
  }
}

function hours(hour) {
  if (hour === 0) {
    return [12, "AM"];
  } else if (hour <= 12) {
    return [formatTime(hour), "AM"];
  } else {
    return [formatTime(hour - 12), "PM"];
  }
}

function liveTime(d) {
  let h = hours(d.getHours());
  let m = formatTime(d.getMinutes());
  let s = formatTime(d.getSeconds());
  return `${h[0]}:${m}:${s} ${h[1]}`;
}

let lastPaintTime = 0;
function main(ctime) {
  window.requestAnimationFrame(main);
  if (ctime - lastPaintTime > 250) {
    d = new Date();
    document.querySelector(".digital-clock").innerHTML = liveTime(d);
    lastPaintTime = ctime;
  }
}

window.requestAnimationFrame(main);
