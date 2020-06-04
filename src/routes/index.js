import React from 'react';

const HomePage = React.lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "HomePage" */),
);
const repositori = '';
const routes = {
  HomePage: {
    path: `${repositori}/`,
    component: HomePage,
  },
};
export default routes;
