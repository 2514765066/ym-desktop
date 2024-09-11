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

  const month = currentDate.getMonth().toString();
  const day = (currentDate.getDay() + 1).toString();
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");

  if (month != nowDate.value.month) {
    nowDate.value.month = month;
  }

  if (day != nowDate.value.day) {
    nowDate.value.day = day;
  }

  if (hours != nowDate.value.hours) {
    nowDate.value.hours = hours;
  }

  if (minutes != nowDate.value.minutes) {
    nowDate.value.minutes = minutes;
  }
};

setInterval(getDate, 10000);
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
