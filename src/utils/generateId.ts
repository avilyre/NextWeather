export function generateId(): string {
  return `${(new Date).getMilliseconds() + Math.random() * 100}`;
}