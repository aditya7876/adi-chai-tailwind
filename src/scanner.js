import { parseChaiClass } from "./parser.js";
import { applyStyles } from "./apply.js";

export function processChai() {
  const elements = document.querySelectorAll("*");

  elements.forEach((el) => {
    if (!el.className) return;

    const classes = el.className.split(/\s+/);
    const remaining = [];

    classes.forEach((cls) => {
      if (cls.startsWith("chai-")) {
        const styles = parseChaiClass(cls);

        if (styles) {
          applyStyles(el, styles);
        }
      } else {
        remaining.push(cls);
      }
    });

    // remove chai-* classes
    el.className = remaining.join(" ");
  });
}
