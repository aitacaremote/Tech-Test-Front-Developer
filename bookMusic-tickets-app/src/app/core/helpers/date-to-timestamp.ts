export function dateToTimestamp(date: Date) {
  const milliseconds = date.getTime();

  // Calculate seconds and nanoseconds
  const seconds = Math.floor(milliseconds / 1000);
  const nanoseconds = (milliseconds % 1000) * 1e6;

  // Create an object with seconds and nanoseconds
  const result = {
    seconds: seconds,
    nanoseconds: nanoseconds,
  };

  return result;
}
