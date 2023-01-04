const giveGradient = (siteName: string) => {
  switch (siteName) {
    case "watchably":
      return "watchablyGradient";
    case "poller":
      return "pollerGradient";
    case "mapty":
      return "maptyGradient";
    case "pigdi":
      return "pigdiGradient";
    default:
      "bg-gradient-to-t from-teal-500 to-blue-500";
  }
};

export default giveGradient;
