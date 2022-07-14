import shiftData from "../assets/shiftType.json";
export default {
  // 用途：計算開始與結束日期相差天數
  diffDays(start, end) {
    return end.diff(start, "days");
  },
  // 用途：將開始到結束之間的日期依序寫入表格中
  writeDates(start, end) {
    let diffDays = this.diffDays(start, end);
    let saveDatesInfo = [];
    for (let number = 0; number <= diffDays; number++) {
      let calculateDate =
        number == 0
          ? start.format("MM/DD/YYYY")
          : start.add(1, "days").format("MM/DD/YYYY");
      saveDatesInfo.push({ date: calculateDate, type: "" });
    }
    return saveDatesInfo;
  },
  // 用途：將 dates 依照 shift.json 的欄位進行對照
  mapData(dates) {
    let newDates = [];
    newDates = dates.map((d) => {
      // 抓出 subject 欄位與 type 欄位相同的資料，並得知該資料的 index
      let index = shiftData
        .map((v) => v.Subject == d.type && d.type !== "")
        .indexOf(true);
      if (index >= 0) {
        shiftData[index].Start_Date = d.date;
        shiftData[index].End_Date = d.date;
      }

      return shiftData[index];
    });
    return newDates;
  },
};
