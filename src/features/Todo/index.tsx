import React, { ReactElement } from 'react'
import { Route, Switch } from 'react-router-dom'
import ListPage from './pages/ListPage'

interface Props {}

function TodoFeatures({}: Props): ReactElement {
  return (
    <div>
      <Switch>
        <Route path="/todo" exact component={ListPage}></Route>
      </Switch>
    </div>
  )
}

export default TodoFeatures
