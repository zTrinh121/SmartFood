// routes.js or Routes.jsx

import { Routes as RouterRoutes, Route } from 'react-router-dom';
import { Home, CookingYourself, DinningOut, Login } from './pages';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/cooking" element={<CookingYourself />} />
      <Route path="/dining" element={<DinningOut />} />
      <Route path="/login" element={<Login />} />
    </RouterRoutes>
  );
};

export default Routes;
