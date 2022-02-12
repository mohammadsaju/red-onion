import react from 'react';
import { Redirect, Route } from "react-router"
import { useStateValue } from '../app/StateProvider';

const PrivateRoute = ({children, ...rest}) => {
    const [{user}] = useStateValue();
    console.log(user);
    return (
        <Route 
        {...rest}
        render={({location}) => user?.email ? (
            children
        ) : (
            <Redirect
            to={{
                pathname: "/login",
                state: { from: location }
            }}
            />
        )}
        >

        </Route>
    )
}

export default PrivateRoute;