export function timeAgo(date) {
  const now = new Date();
  const givenDate = new Date(date);
  const diffInMs = now - givenDate;

  // Convert time difference from milliseconds to various units
  const seconds = Math.floor(diffInMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30); // Approximate
  const years = Math.floor(days / 365); // Approximate

  if (seconds < 60) {
    return `${seconds} sec${seconds !== 1 ? "s" : ""}`;
  } else if (minutes < 60) {
    return `${minutes} min${minutes !== 1 ? "s" : ""}`;
  } else if (hours < 24) {
    return `${hours} hour${hours !== 1 ? "s" : ""}`;
  } else if (days < 7) {
    return `${days} day${days !== 1 ? "s" : ""}`;
  } else if (weeks < 4) {
    return `${weeks} week${weeks !== 1 ? "s" : ""}`;
  } else if (months < 12) {
    return `${months} month${months !== 1 ? "s" : ""}`;
  } else {
    return `${years} year${years !== 1 ? "s" : ""}`;
  }
}
