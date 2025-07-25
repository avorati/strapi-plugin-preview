const configRoutes = [
  {
    method: 'POST',
    path: '/config',
    handler: 'config.saveConfig',
  },
  {
    method: 'GET',
    path: '/config',
    handler: 'config.getConfig',
  },
];

export default configRoutes;
