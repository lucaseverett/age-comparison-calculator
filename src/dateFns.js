import {
  isBefore,
  add,
  format,
  formatDuration,
  intervalToDuration,
} from "date-fns";

function age(birthday) {
  return formatDuration(
    intervalToDuration({
      start: convertToDate(birthday),
      end: new Date(),
    }),
    { format: ["years", "months", "days"], delimiter: ", " }
  );
}

function convertToDate(date) {
  if (typeof date === "string") {
    date = date.split("-");
    return new Date(date[0], date[1] - 1, date[2]);
  }
  return new Date(date);
}

function formatDate(date) {
  return format(convertToDate(date), "MMMM d, Y");
}

function findDate(yourBirthday, theirBirthday) {
  return formatDate(
    add(
      convertToDate(theirBirthday),
      intervalToDuration({
        start: convertToDate(yourBirthday),
        end: new Date(),
      })
    )
  );
}

function isValidBirthdate(date1, date2 = Date.now()) {
  return isBefore(convertToDate(date1), convertToDate(date2));
}

export { age, formatDate, findDate, isValidBirthdate };
