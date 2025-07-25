import type { Core } from '@strapi/strapi';
import configRoutes from './routes/config';
import configController from './controllers/config';
import configService from './services/config';

export default ({ strapi }: { strapi: Core.Strapi }) => {
  return {
    register() {},
    bootstrap() {},
    controllers: {
      config: configController,
    },
    services: {
      config: configService,
    },
    routes: {
      'content-api': {
        type: 'content-api',
        routes: configRoutes,
      },
      admin: {
        type: 'admin',
        routes: configRoutes,
      },
    },
  };
};
