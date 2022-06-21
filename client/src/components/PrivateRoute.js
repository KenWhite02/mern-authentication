import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = localStorage.getItem('authToken');

  return (
    <Route
      {...rest}
      render={() => {
        return isAuthenticated ? children : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
