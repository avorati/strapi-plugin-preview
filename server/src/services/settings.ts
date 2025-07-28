import type { Core } from '@strapi/strapi';
import { PLUGIN_ID } from '../pluginId';

export const settingsService = ({ strapi }: { strapi: Core.Strapi }) => {
  const getPluginStore = () => {
    return strapi.store({
      environment: '',
      type: 'plugin',
      name: PLUGIN_ID,
    });
  };

  const setSettings = async (value: string) => {
    try {
      const pluginStore = getPluginStore();
      await pluginStore?.set({ key: 'settings', value });
      return { success: true };
    } catch (err) {
      console.log(err);
      return { success: false };
    }
  };

  const getSettings = async (): Promise<{url: string | null}> => {
    const pluginStore = getPluginStore();

    let config = await pluginStore.get({ key: 'settings' });
    return config ? { url: (config as any)?.url } : {url: null};
  };

  return {
    getSettings,
    setSettings,
  };
};
