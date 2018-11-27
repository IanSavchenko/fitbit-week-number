import '../../common';
import DayOfWeek from '../../common/day-of-week';

describe('Date.getWeek()', function() {
  it('returns first week for January 2018', function() {
    let date = new Date(2018, 0, 1, 0, 0, 1); // 1.1.2018
    let week = date.getWeek(DayOfWeek.Monday);

    expect(week).toBe(1);
  });

  it('returns correct value for July 2018', function() {
    let date = new Date(2018, 6, 1, 0, 0, 1); // 1.7.2018
    let week = date.getWeek(DayOfWeek.Monday);

    expect(week).toBe(26);
  });

  it('returns last week for 30th December 2018', function() {
    let date = new Date(2018, 11, 30, 0, 0, 1); // 30.12.2018
    let week = date.getWeek(DayOfWeek.Monday);

    expect(week).toBe(52);
  });

  it('returns next year`s first week on 31st December 2018', function() {
    let date = new Date(2018, 11, 31, 0, 0, 1); // 31.12.2018
    let week = date.getWeek(DayOfWeek.Monday);

    expect(week).toBe(1);
  });

  it('returns last year`s week for not full week on 1st January 2017', function() {
    let date = new Date(2017, 0, 1, 0, 0, 1);
    let week = date.getWeek(DayOfWeek.Monday);

    expect(week).toBe(52);
  });

  it('returns last year`s week for not full week on 1st January 2016', function() {
    let date = new Date(2016, 0, 1, 0, 0, 1);
    let week = date.getWeek(DayOfWeek.Monday);

    expect(week).toBe(53);
  });

  it('returns different week 1st January 2015 with different firstDayOfWeek', function() {
    let date = new Date(2015, 0, 1, 0, 0, 1);
    let weekMonday = date.getWeek(DayOfWeek.Monday);
    let weekSunday = date.getWeek(DayOfWeek.Sunday);

    expect(weekMonday).toBe(1);
    expect(weekSunday).toBe(53);
  });
});

describe('Date.getWeekStart()', function() {
  it('returns correctly around 1.1.2015', function() {
    let date = new Date(2015, 0, 1, 0, 0, 1);
    let weekStartMonday = date.getWeekStart(DayOfWeek.Monday);
    let weekStartSunday = date.getWeekStart(DayOfWeek.Sunday);

    expect(weekStartMonday.getDate()).toBe(29);
    expect(weekStartSunday.getDate()).toBe(28);
  });

  it('returns correctly around 1.1.2016', function() {
    let date = new Date(2016, 0, 1, 0, 0, 1);
    let weekStartMonday = date.getWeekStart(DayOfWeek.Monday);
    let weekStartSunday = date.getWeekStart(DayOfWeek.Sunday);

    expect(weekStartMonday.getDate()).toBe(28);
    expect(weekStartSunday.getDate()).toBe(27);
  });
});

describe('Date.getWeekEnd()', function() {
  it('returns correctly around 1.1.2015', function() {
    let date = new Date(2015, 0, 1, 0, 0, 1);
    let weekEndMonday = date.getWeekEnd(DayOfWeek.Monday);
    let weekEndSunday = date.getWeekEnd(DayOfWeek.Sunday);

    expect(weekEndMonday.getDate()).toBe(4);
    expect(weekEndSunday.getDate()).toBe(3);
  });

  it('returns correctly around 1.1.2016', function() {
    let date = new Date(2016, 0, 1, 0, 0, 1);
    let weekEndMonday = date.getWeekEnd(DayOfWeek.Monday);
    let weekEndSunday = date.getWeekEnd(DayOfWeek.Sunday);

    expect(weekEndMonday.getDate()).toBe(3);
    expect(weekEndSunday.getDate()).toBe(2);
  });
});