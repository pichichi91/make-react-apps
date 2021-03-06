import React, { useState } from 'react';
import './App.css';

import { StyledCalender, StyledDateChooserButton, StyledDateChooser, StyledCalenderDay } from "./Styles"

const calendarDates = Array(31)
  .fill(0)
  .map((e, i) => i);

export default function App() {

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isStart, setIsStart] = useState(true)

  const [hoverDate, setHoverDate] = useState(null)

  function updateDate(chosenDay) {

    if (startDate && chosenDay < startDate) {
      setStartDate(chosenDay)
      return setIsStart(false);
    }

    if (endDate && chosenDay > endDate) {
      setEndDate(chosenDay)
      return setIsStart(true)
    }

    isStart ? setStartDate(chosenDay) : setEndDate(chosenDay);
    setIsStart((isStart) => !isStart);


  }

  function checkInBetween(day) {
    if (startDate && !endDate) return day > startDate && day < hoverDate;
    return startDate && endDate && day > startDate && day < endDate
  }

  return (
    <>
      <StyledDateChooser >
        <StyledDateChooserButton isChoosing={isStart} onClick={() => setIsStart(true)}>
          Start Date <span>{startDate}</span>
        </StyledDateChooserButton>
        <StyledDateChooserButton isChoosing={!isStart} onClick={() => setIsStart(false)}>
          End Date <span>{endDate}</span>
        </StyledDateChooserButton>
      </StyledDateChooser>

      <StyledCalender >
        {calendarDates.map((day, index) => {
          const dayNumber = day + 1;
          const isSelected = dayNumber === startDate || dayNumber === endDate
          const isInBetween = checkInBetween(dayNumber)

          return <StyledCalenderDay onMouseOver={() => setHoverDate(dayNumber)} isInBetween={isInBetween} isSelected={isSelected} key={index} className="calendar-day" onClick={() => updateDate(dayNumber)}>{dayNumber}</StyledCalenderDay>;

        })}
      </StyledCalender>
    </>
  )

}
