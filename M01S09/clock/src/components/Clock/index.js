import { React, useState } from 'react'

function Clock() {
  let initialTime = new Date().toLocaleTimeString()
  let initialDate = new Date().toLocaleDateString()

  const [time, setTime] = useState(initialTime)
  const [date, setDate] = useState(initialDate)

  function updateTime() {
    initialTime = new Date().toLocaleTimeString('pt-BR')
    initialDate = new Date().toLocaleDateString('pt-BR')

    setTime(initialTime)
    setDate(initialDate)
  }

  setInterval(updateTime, 1000)

  return (
    <div className="clock-container">
      <h1 className="clock-hour-item">{time}</h1>
      <h3 className="clock-date-item">{date}</h3>
    </div>
  )
}

export default Clock
