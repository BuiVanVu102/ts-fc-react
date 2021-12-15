import { Route, Switch } from 'react-router-dom'
import './App.css'
import TodoFeatures from './features/Todo'

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/todo" exact component={TodoFeatures}></Route>
      </Switch>
    </div>
  )
}

export default App
