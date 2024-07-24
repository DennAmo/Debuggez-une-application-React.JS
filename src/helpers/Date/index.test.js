import {getMonth} from "./index"
/**
 * 
 */

describe("Date helper", () => {
  describe("When getMonth is called", () => {
    const testCases = [
      { date: new Date('2022-01-01'), expected: "janvier" },
      { date: new Date('2022-07-08'), expected: "juillet" },
    ];

    testCases.forEach(({ date, expected }) => {
      it(`returns ${expected} for ${date}`, () => {
         expect(getMonth(date)).toEqual(expected);
      });
    });
  });
});

