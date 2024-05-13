export function validateInputData(courseName: string, hoursCount: number, availableLessonsCount: number, lessonsCount: number) {
  return validateCourseName(courseName)
    && validateHoursCount(hoursCount)
    && validateAvailableLessonsCount(availableLessonsCount)
    && validateLessonsCount(lessonsCount);
}

function validateCourseName(courseName: string) {
  if (courseName.length == 0) {
    return false;
  }
  if (courseName.length > 50) {
    return false;
  }
  return courseName.length < 5;
}

function validateHoursCount(hoursCount: number) {
  return hoursCount != 0;
}

function validateAvailableLessonsCount(availableLessonsCount: number) {
  return availableLessonsCount != 0;
}

function validateLessonsCount(lessonsCount: number) {
  return lessonsCount != 0;
}
