import { Route , Switch } from 'react-router-dom'
import Login from './pages/Login'
import UserHome from './pages/UserHome'
import Home from './pages/Home'

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/userhome" exact component={UserHome} />
        </Switch>
    )
}

export default Routes