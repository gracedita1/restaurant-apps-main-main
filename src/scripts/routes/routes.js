import Home from '../views/pages/home';
import Favorite from '../views/pages/favorite';
import detail from '../views/pages/detail';

const routes = {
  '/': Home,
  '/home': Home,
  '/favorite': Favorite,
  '/detail/:id': detail,
};

export default routes;
