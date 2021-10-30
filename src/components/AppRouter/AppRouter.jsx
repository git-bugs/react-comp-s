import { Switch, Route, Redirect } from "react-router-dom"
import { Todos } from '../../pages/Todos/Todos'
import { Posts } from '../../pages/Posts/Posts'
import { Home } from "../../pages/Home/Home"

export const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/todos/:page?" component={Todos} />
      <Route exact path="/posts" component={Posts} />
      <Redirect to="/" />
    </Switch>
  )
}
