import { Core } from '@strapi/strapi';
import { PLUGIN_ID } from './pluginId';

const bootstrap = async ({ strapi }: {strapi: Core.Strapi}) => {
  // Register permission actions.
  const actions = [
    {
      section: 'plugins',
      displayName: 'Access the plugin settings',
      uid: 'read',
      pluginName: PLUGIN_ID,
    },
  ];
  console.log('Registrando Permissão do Plugin: ' + PLUGIN_ID);
  console.log('Config: ' + JSON.stringify(actions, null, 2));
  await strapi.admin.services.permission.actionProvider.registerMany(actions);
};

export default bootstrap;
