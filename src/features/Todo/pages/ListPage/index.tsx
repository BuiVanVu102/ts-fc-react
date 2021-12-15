import React, { ReactElement, useMemo, useState } from 'react'
import { FaSortAmountDownAlt } from 'react-icons/fa'
import { Todo, Value } from '../../../../utils/common'
import TodoForm from '../../components/TodoForm'
import TodoList from '../../components/TodoList'
import './style.scss'
interface Props {}

function ListPage({}: Props): ReactElement {
  //init initialState
  const initList: Todo[] = [
    { id: 1, title: 'Buy groceries for next week', status: 'completed', date: '12/12/2021' },
    { id: 2, title: 'Renew car insurance', status: 'active', date: '13/12/2021' },
    { id: 3, title: 'Sign up for online course', status: 'active', date: '14/12/2021' },
  ]
  //init State TodoList
  const [listTodo, setListTodo] = useState<Todo[]>(initList)
  //init State Filter
  const [filter, setFilter] = useState<string>('all')
  //handleSubmit Form
  const handleSubmit = (values: Value) => {
    const newTodo = {
      id: listTodo.length + 1,
      title: values.title,
      status: 'active',
      date: values?.date ? values.date.toLocaleString().split(',')[0] : undefined,
    }
    const newTodoList = [...listTodo, newTodo]
    values.title.trim() ? setListTodo(newTodoList) : alert('not thing!!! Please enter again')
  }
  //handle CheckTodoClick
  const handleCheckTodoClick = (todo: object, idx: number) => {
    const newList = [...listTodo]
    newList[idx] = {
      ...newList[idx],
      status: newList[idx].status === 'active' ? 'completed' : 'active',
    }
    setListTodo(newList)
  }
  //handle Filter OnChange
  const handleOnChange = (e: any) => {
    console.log(e.target.value)
    setFilter(e.target.value)
  }
  //handle Render List
  const renderTodoList = useMemo(
    () => listTodo.filter((todo) => filter === 'all' || filter === todo.status),
    [listTodo, filter]
  )
  //handleTodoDelete
  const handleTodoDelete = (id: number) => {
    const newList = [...listTodo]
    const newCurrentTodo = newList.filter((item) => item.id != id)
    setListTodo(newCurrentTodo)
  }
  return (
    <div className="Container">
      <TodoForm onSubmit={handleSubmit}></TodoForm>
      <div className="main">
        <div className="main__filter">
          <label htmlFor="" className="main__filter--lb">
            Filter
          </label>
          <select
            name=""
            id=""
            className="main__filter--sl"
            onChange={handleOnChange}
            value={filter}
          >
            <option value="all" selected>
              All
            </option>
            <option value="completed">Completed</option>
            <option value="active">Active</option>
            <option value="has-due-date">Has-due-date</option>
          </select>
        </div>
        <div className="main__sort">
          <label htmlFor="" className="main__sort--lb">
            Sort
          </label>
          <select name="" id="" className="main__sort--sl">
            <option value="added-date-asc" selected>
              Added date
            </option>
            <option value="due-date-desc">Due date</option>
          </select>
          <FaSortAmountDownAlt
            className="main__sort--icon"
            style={{}}
            size={'1em'}
            color={'#007bff'}
          />
        </div>
      </div>
      <TodoList
        listTodo={renderTodoList}
        onTodoClick={handleCheckTodoClick}
        onTodoDelete={handleTodoDelete}
      ></TodoList>
    </div>
  )
}

export default ListPage
