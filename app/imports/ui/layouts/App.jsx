import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Landing from '../pages/Landing';
import EditClub from '../pages/EditClub';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import NavBar from '../components/NavBar';
import SignIn from '../pages/SignIn';
import UserProfilePage from '../pages/UserProfilePage';
import EditUserPage from '../pages/EditUserProfile';
import NotAuthorized from '../pages/NotAuthorized';
import LoadingSpinner from '../components/LoadingSpinner';
import ClubHostPage from '../pages/ClubHostPage';
import SignOutMessage from '../pages/SignOutMessage';
import ClubCategoriesPage from '../pages/ClubCategoriesPage';
import AdminControl from '../pages/AdminControl';
import AddClub from '../pages/AddClub';
import RemoveClub from '../pages/RemoveClub';
import ClubListPage from '../pages/ClubListPage';
import AdminHomePage from '../pages/AdminHomePage';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return {
      ready: rdy,
    };
  });
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ClubCategoriesPage" element={<ClubCategoriesPage />} />
          <Route path="/UserProfile" element={<UserProfilePage />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/signout" element={<SignOutMessage />} />
          <Route path="/home" element={<ProtectedRoute><Landing /></ProtectedRoute>} />
          <Route path="/add" element={<SuperAdminProtectedRoute ready={ready}><AddClub /></SuperAdminProtectedRoute>} />
          <Route path="/ClubHostPage" element={<AdminProtectedRoute ready={ready}><ClubHostPage /></AdminProtectedRoute>} />
          <Route path="/AdminHomePage" element={<AdminProtectedRoute ready={ready}><AdminHomePage /></AdminProtectedRoute>} />
          <Route path="/edit/:_id" element={<AdminProtectedRoute ready={ready}><EditClub /></AdminProtectedRoute>} />
          <Route path="/admin" element={<SuperAdminProtectedRoute ready={ready}><AdminControl /></SuperAdminProtectedRoute>} />
          <Route path="/remove" element={<SuperAdminProtectedRoute ready={ready}><RemoveClub /></SuperAdminProtectedRoute>} />
          <Route path="/edituser/:_id" element={<ProtectedRoute><EditUserPage /></ProtectedRoute>} />
          <Route path="/ClubListPage" element={<ProtectedRoute><ClubListPage /></ProtectedRoute>} />
          <Route path="/notauthorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ ready, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!ready) {
    return <LoadingSpinner />;
  }
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
  return (isLogged && isAdmin) ? children : <Navigate to="/notauthorized" />;
};

/**
 * SuperAdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and superadmin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const SuperAdminProtectedRoute = ({ ready, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!ready) {
    return <LoadingSpinner />;
  }
  const isSuperAdmin = Roles.userIsInRole(Meteor.userId(), 'superadmin');
  return (isLogged && isSuperAdmin) ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Landing />,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  ready: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

AdminProtectedRoute.defaultProps = {
  ready: false,
  children: <Landing />,
};

SuperAdminProtectedRoute.propTypes = {
  ready: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

SuperAdminProtectedRoute.defaultProps = {
  ready: false,
  children: <Landing />,
};

export default App;
