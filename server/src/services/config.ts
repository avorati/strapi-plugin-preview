import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async setUrl(url: string) {
    try {
      await strapi
        ?.store({
          type: 'plugin',
          name: 'preview',
          key: 'settings',
        })
        ?.set({ value: { url } });
      return { success: true };
    } catch (err) {
      console.log(err);
      return { success: false };
    }
  },

  async getUrl(): Promise<string | null> {
    const config = await strapi
      ?.store({
        type: 'plugin',
        name: 'preview',
        key: 'settings',
      })
      ?.get();
    return config ? (config as any)?.url : null;
  },
});
