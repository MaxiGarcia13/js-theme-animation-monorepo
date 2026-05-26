export interface BlurOptions {
  /** Blur inside the sweeping area; clears as the reveal finishes. */
  blur?: boolean;
  /** Blur radius when `blurArea` is true. Defaults to `12px`. */
  blurAmount?: string;
}

export type Options = BlurOptions & {
  /** Duration of the animation. Defaults to `0.5s`. */
  duration?: `${number}ms` | `${number}s`;
};

const classes = {
  blur: 'theme-reveal--blur',
};

const styles = {
  duration: '--theme-reveal-duration',
  blurAmount: '--theme-reveal-blur-amount',
};

export function setOptions(html: HTMLElement, options?: Options) {
  if (options?.blur) {
    html.classList.add(classes.blur);

    if (options.blurAmount) {
      html.style.setProperty(styles.blurAmount, options.blurAmount);
    }
  }

  if (options?.duration) {
    html.style.setProperty(styles.duration, options.duration);
  }
}

export function removeOptions(html: HTMLElement) {
  html.classList.remove(classes.blur);
  html.style.removeProperty(styles.blurAmount);
  html.style.removeProperty(styles.duration);
}
