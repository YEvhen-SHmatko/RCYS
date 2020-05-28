import React from 'react';

const HomePage = React.lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const repositori = '';
const routes = {
  Home: {
    path: `${repositori}/`,
    components: HomePage,
  },
};
export default routes;
