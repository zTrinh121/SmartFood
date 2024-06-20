import { BrowserRouter, Switch, Route } from 'react-router-dom
import { Home, CookingYourself, DinningOut, Login } from './pages';

const Routes = () => {
  return (
    <BrowserRouter>
    <Switch>
    <Route path="/" element={<Home />} />
      <Route path="/cooking" element={<CookingYourself />} />
      <Route path="/dining" element={<DinningOut />} />
      <Route path="/login" element={<Login />} />
    </Switch>
    </BrowserRouter>
  );
};

export default Routes;
