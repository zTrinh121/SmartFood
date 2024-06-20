
import { useRoutes } from 'react-router-dom'
import {Home} from './pages/Home'
import { CookingYourself, DinningOut, Login } from './pages'

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
        path: '/cooking',
        element: <CookingYourself />,
      },
      {
        path: '/dining',
        element: <DinningOut />,
      },
      {
        path: '/login',
        element: <Login />,
      },
  ])

  return routes
}

export default Routes
