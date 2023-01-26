export interface SimpleDate {
  day: number;
  month: number;
  year: number;
}

export function buildSimpleDate(date = new Date()): SimpleDate {
  return { day: date.getDate(), month: date.getMonth() + 1, year: date.getFullYear() };
}

export function isBefore(date: SimpleDate, otherDate = buildSimpleDate()): boolean {
  return otherDate.year > date.year || otherDate.month > date.month || otherDate.day > date.day;
}

export function isEquals(date: SimpleDate, otherDate = buildSimpleDate()): boolean {
  return otherDate.year == date.year && otherDate.month == date.month && otherDate.day == date.day;
}

export function isAfter(date: SimpleDate, otherDate = buildSimpleDate()): boolean {
  return otherDate.year < date.year || otherDate.month < date.month || otherDate.day < date.day;
}

export function isAfterOrEquals(date: SimpleDate, otherDate = buildSimpleDate()): boolean {
  return !isBefore(date, otherDate);
}

export function isBeforeOrEquals(date: SimpleDate, otherDate = buildSimpleDate()): boolean {
  return !isAfter(date, otherDate);
}
