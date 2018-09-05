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

Date.prototype.getWeek = function(firstDayOfWeek) {
  let weekMs = 1000 * 60 * 60 * 24 * 7;
  
  let januaryFirst = new Date(this.getFullYear(), 0, 1);
  let firstWeekStart = new Date(januaryFirst.valueOf());
  firstWeekStart.setDate(1 + firstDayOfWeek - januaryFirst.getDay());
  
  if (januaryFirst.getDay() > firstDayOfWeek + 3) {
    firstWeekStart.setDate(firstWeekStart.getDate() + 7);
  }
  
  if (firstWeekStart > this) {
    return new Date(this.valueOf() - weekMs).getWeek() + 1;
  }
  
  let weekNumber = 1 + Math.floor((this - firstWeekStart) / weekMs);
  return weekNumber;
};

Date.prototype.getWeekStart = function(firstDayOfWeek) {
  let weekMs = 1000 * 60 * 60 * 24 * 7;
  
  let weekNum = this.getWeek(firstDayOfWeek);
  let januaryFirst = new Date(this.getFullYear(), 0, 1);
  let firstWeekStart = new Date(januaryFirst.valueOf());
  firstWeekStart.setDate(1 + firstDayOfWeek - januaryFirst.getDay());
  
  return new Date(firstWeekStart.valueOf() + (weekNum - 1) * weekMs);
};

Date.prototype.getWeekEnd = function(firstDayOfWeek) {
  let dayMs = 1000 * 60 * 60 * 24;
  
  let weekStart = this.getWeekStart(firstDayOfWeek); 
  return new Date(weekStart.valueOf() + 6 * dayMs);
};
