function batteryCheck(battery: number) {
  if (battery < 35) {
    return 'progress-empty';
  } else if (battery < 50) {
    return 'progress-two';
  } else {
    return 'progress-full';
  }
}

export {batteryCheck};
