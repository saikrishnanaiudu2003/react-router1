import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Notfound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Contact" component={Contact} />
      <Route component={Notfound} />
    </Switch>
  </BrowserRouter>
)

export default App
