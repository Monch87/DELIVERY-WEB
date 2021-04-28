import { Switch, Route } from 'react-router-dom'
import IndexPage from '../pages/Index/Index'
import Cocktails from '../pages/Cocktails/Cocktails'


const Routes = () => {

    return (
        <Switch>
            <Route path="/" exact render={() => <IndexPage />} />
            <Route path="/cocktails-list/:choice" render={props => <Cocktails {...props} />} />
        </Switch>
    )
}

export default Routes