/**
 * Application methods
 */
import bootstrap from './bootstrap';
import destroy from './destroy';
import register from './register';

/**
 * Plugin server methods
 */
import controllers from './controllers';
import routes from './routes';
import services from './services';

export default {
  register,
  bootstrap,
  destroy,
  controllers,
  routes,
  services,
};
