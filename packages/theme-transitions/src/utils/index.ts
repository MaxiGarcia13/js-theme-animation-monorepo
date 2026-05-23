export function $html() {
  return document.documentElement;
}

export function $onTransitionEnd(callback: () => void, duration: number = 600) {
  setTimeout(() => {
    callback();
  }, duration);
}
