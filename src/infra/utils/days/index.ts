function daysInMonth(month: number, year: number) {
  return new Date(year, month, 0).getDate()
}

export const getDaysByMonthAndYear = (year: number, month: number) => {
  const d = new Date(year, month)

  const getTot = daysInMonth(d.getMonth(), d.getFullYear()) //Get total days in a month

  const saturday = [] //Declaring array for inserting Saturdays
  const sunday = [] //Declaring array for inserting Sundays
  const wednesday = [] //Declaring array for inserting Sundays

  for (let index = 1; index <= getTot; index++) {
    //looping through days in month
    const newDate = new Date(d.getFullYear(), d.getMonth(), index)
    if (newDate.getDay() == 0) {
      //if Sunday
      sunday.push(index)
    }
    if (newDate.getDay() == 6) {
      //if Saturday
      saturday.push(index)
    }

    if (newDate.getDay() == 3) {
      //if Saturday
      wednesday.push(index)
    }
  }
  return {
    saturday,
    sunday,
    wednesday,
  }
}
