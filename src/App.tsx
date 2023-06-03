import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ROUTES from './configs/routes';
import Layout from './components/Layout';
import Posts from './pages/Posts';
import About from './pages/About';
import User from './pages/User';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.index} element={<Layout />}>
          <Route path={ROUTES.posts} element={<Posts />} />
          <Route path={ROUTES.about} element={<About />} />
          <Route path={ROUTES.user} element={<User />} />
          <Route path={ROUTES.all} element={<Navigate to={ROUTES.index} replace />} />
          <Route index element={<Posts />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
