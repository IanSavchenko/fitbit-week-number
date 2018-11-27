import DayOfWeek from './day-of-week';

const DAYS = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const MONTHS = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

Date.prototype.toFullDayString = function() {
  return `${DAYS[this.getDay()]}, ${MONTHS[this.getMonth()]} ${this.getDate()}`;
};

Date.prototype.toDayString = function() {
  return `${MONTHS[this.getMonth()]} ${this.getDate()}`;
};

Date.prototype.toDayNameString = function() {
  return `${DAYS[this.getDay()]}`;
};

let _getWeekOneOfYear = function(year: number, firstDayOfWeek: DayOfWeek) {
  let januaryFirst = new Date(year, 0, 1);
  let firstWeekStart = new Date(januaryFirst.valueOf());

  // set on first day of week, i.e. Monday
  firstWeekStart.setDate(1 + firstDayOfWeek - januaryFirst.getDay());
  if (januaryFirst.getDay() > firstDayOfWeek + 3) {
    firstWeekStart.setDate(firstWeekStart.getDate() + 7);
  }

  return firstWeekStart;
}

Date.prototype.getWeek = function(firstDayOfWeek: DayOfWeek) {
  let weekMs = 1000 * 60 * 60 * 24 * 7;
  
  let firstWeekStart = _getWeekOneOfYear(this.getFullYear(), firstDayOfWeek);
  let firstWeekStartNextYear = _getWeekOneOfYear(this.getFullYear() + 1, firstDayOfWeek);
  
  if (this < firstWeekStart) {
    return new Date(this.valueOf() - weekMs).getWeek(firstDayOfWeek) + 1;
  }

  if (this > firstWeekStartNextYear) {
    return new Date(this.valueOf() + weekMs).getWeek(firstDayOfWeek) - 1;
  }
  
  let weekNumber = 1 + Math.floor((this - <any>firstWeekStart) / weekMs);
  return weekNumber;
};

Date.prototype.getWeekStart = function(firstDayOfWeek: DayOfWeek) {
  let weekStart = new Date(this.getFullYear(), this.getMonth(), this.getDate());
  weekStart.setDate(this.getDate() - (this.getDay() - firstDayOfWeek));
  return weekStart;
};

Date.prototype.getWeekEnd = function(firstDayOfWeek: DayOfWeek) {
  let dayMs = 1000 * 60 * 60 * 24;
  
  let weekStart = this.getWeekStart(firstDayOfWeek); 
  return new Date(weekStart.valueOf() + 6 * dayMs);
};

declare global {
  interface Date {
    toFullDayString(): string;
    toDayString(): string;
    toDayNameString(): string;
    getWeek(firstDayOfWeek: DayOfWeek): number;
    getWeekStart(firstDayOfWeek: DayOfWeek): Date;
    getWeekEnd(firstDayOfWeek: DayOfWeek): Date;
  }
}
