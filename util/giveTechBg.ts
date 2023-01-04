const giveTechBg = (techName: string) => {
  switch (techName) {
    case "React":
      return "reactChip";
    case "SCSS":
      return "SCSSChip";
    case "Firebase":
      return "FirebaseChip";
    case "TypeScript":
      return "TypeScriptChip";
    case "JavaScript":
      return "JavaScriptChip";
    case "Tailwind":
      return "TailwindChip";
    case "Next.js":
      return "NextjsChip";
    default:
      "";
  }
};

export default giveTechBg;
