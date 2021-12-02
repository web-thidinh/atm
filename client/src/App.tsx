import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import PageNotFound from './components/PageNotFound'
import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"
import { useSelector } from 'react-redux'
import { IRootState } from './store/reducers'

function App() {
  const auth = useSelector((state:IRootState)=>{
    return state.auth.isLoggedin 
  })
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={()=>{
          return <Redirect to="/login"/>
        }}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register}/>
        {
          auth ?
            <Route exact path="/home" component={Home}/>
          :
          <Redirect to="/login"/>
        }
        <Route component={PageNotFound}/>
      </Switch> 
    </Router> 
  )
}

export default App;