import type { Core } from '@strapi/strapi';

export default ({ strapi }: { strapi: Core.Strapi }) => ({
  async saveConfig(ctx: any) {
    const { url } = ctx.request.body;
    if (!url) {
      return ctx.throw(400, 'A URL é obrigatória');
    }
    const response = await strapi?.plugin('draft')?.service('config').setUrl(url);
    ctx.send({ success: response?.success || false, url });
  },

  async getConfig(ctx: any) {
    const url = await strapi?.plugin('draft')?.service('config')?.getUrl();
    ctx.send(url ? {url} : {});
  },
});
