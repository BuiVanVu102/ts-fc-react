import React, { ReactElement, useState } from 'react'
import { FaCheckSquare } from 'react-icons/fa'
import { Value } from '../../../../utils/common'

import './style.scss'
interface Props {
  onSubmit: (value: { title: string; date?: Date }) => void
}

function TodoForm(props: Props): ReactElement {
  const initValue: Value = {
    title: '',
    date: undefined,
  }
  //init State
  const [title, setTitle] = useState(initValue.title)
  const [date, setDate] = useState(initValue.date)

  //handleOnchange
  const handleOnChange = (e: any) => {
    e.preventDefault()
    setTitle(e.target.value)
    console.log(title)
  }
  //handleDateChange
  const handleDateChange = (e: any) => {
    e.preventDefault()
    setDate(new Date(e.target.value))
    console.log(date)
  }
  //handleSubmit
  const handleSubmit = (value: { title: string; date?: Date }) => {
    const { onSubmit } = props
    if (!onSubmit) return
    onSubmit(value)
    setTitle('')
  }
  return (
    <div className="header">
      <div className="header__title">
        <FaCheckSquare
          className="header__title--icon"
          style={{ alignItems: 'center' }}
          size={'3em'}
          color={'#007bff'}
        />
        <u className="header__title--text">My Todo-s</u>
      </div>
      <div className="header__input">
        <input
          type="text"
          name="title"
          id=""
          value={title}
          className="header__input--text"
          placeholder="Add new"
          onChange={handleOnChange}
        />
        <input
          type="date"
          name=""
          id=""
          required
          pattern="\d{4}-\d{2}-\d{2}"
          className="header__input--date"
          onChange={handleDateChange}
        />
        <button
          type="submit"
          className="header__input--submit"
          onClick={() => handleSubmit({ title, date })}
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default TodoForm
