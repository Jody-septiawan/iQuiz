import { useContext, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Landing from './pages/Landing';
import BuySuperUser from './pages/BuySuperUser';
import SuperUser from './pages/SuperUser';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import Course from './pages/Course';
import Admin from './pages/Admin';
import CourseLevel from './pages/CourseLevel';
import LessonAdmin from './pages/LessonAdmin';

import { UserContext } from './contexts/userContext';

import { API, setAuthToken } from './config/api';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let history = useHistory();
  AOS.init({ duration: 2000 });
  const [state, dispatch] = useContext(UserContext);

  const checkUser = async () => {
    try {
      const response = await API.get('/check-auth');

      if (response.data.status === 'failed') {
        return dispatch({
          type: 'AUTH_ERROR',
        });
      }

      let payload = response.data.data.user;
      payload.token = localStorage.token;

      dispatch({
        type: 'USER_SUCCESS',
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUser();
  }, []);

  useEffect(() => {
    if (state.isLogin == true) {
      if (state.user.role == 'ADMIN') {
        history.push('/admin');
      } else {
        history.push('/');
      }
    } else {
      history.push('/');
    }
  }, [state]);

  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/super-users" component={BuySuperUser} />
      <Route path="/super-user/:id" component={SuperUser} />
      <Route path="/profile" component={Profile} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/course/:id" component={Course} />
      <Route path="/admin" component={Admin} />
      <Route path="/level-course/:id" component={CourseLevel} />
      <Route path="/lesson/:id" component={LessonAdmin} />
    </Switch>
  );
}

export default App;
