const monthStyle = {
  english: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  chinese: [
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "十一",
    "十二",
  ],
  number: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
};

export const nowDate = ref({
  month: "",
  day: "",
  hours: "",
  minutes: "",
});

const getDate = () => {
  const currentDate = new Date();

  nowDate.value.month = currentDate.getMonth().toString();
  nowDate.value.day = (currentDate.getDay() + 1).toString();
  nowDate.value.hours = currentDate.getHours().toString().padStart(2, "0");
  nowDate.value.minutes = currentDate.getMinutes().toString().padStart(2, "0");
};

setInterval(getDate, 1000 * 60);
getDate();

export const replaceTimeString = (str: string) => {
  if (!str) return "";

  return str
    .replaceAll("hh", nowDate.value.hours)
    .replaceAll("mm", nowDate.value.minutes);
};

export const replaceMonthString = (style: string) => {
  if (!style) return "";

  return monthStyle[style][nowDate.value.month];
};
