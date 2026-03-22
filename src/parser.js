import { spacing, colors } from "./config.js";

export function parseChaiClass(cls) {
  const raw = cls.replace("chai-", "");

  // ✅ 1. HANDLE NO-VALUE UTILITIES FIRST
  switch (raw) {
    case "flex":
      return { display: "flex" };

    case "block":
      return { display: "block" };

    case "inline":
      return { display: "inline" };

    case "hidden":
      return { display: "none" };
  }

  // ✅ 2. NORMAL REGEX PARSING
  const match = raw.match(/^([a-z]+)-(.+)$/);
  if (!match) return null;

  const [, utility, value] = match;

  switch (utility) {
    // 📏 SPACING
    case "p":
      return { padding: spacing(value) };

    case "m":
      return { margin: spacing(value) };

    // 🎨 COLORS
    case "bg":
      return { backgroundColor: colors[value] || value };

    case "text":
      return { color: colors[value] || value };

    // 🔤 TYPOGRAPHY
    case "fs":
      return { fontSize: `${value}px` };

    case "ta":
      return { textAlign: value };

    // 🟦 BORDER
    case "border":
      return { border: `${value}px solid black` };

    case "rounded":
      return { borderRadius: `${value}px` };

    // 📦 FLEX LAYOUT
    case "jc":
      return { justifyContent: value };

    case "ai":
      return { alignItems: value };

    default:
      return null;
  }
}
