
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'RealEstateDoc',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/RealEstateDoc/login",
    "route": "/RealEstateDoc"
  },
  {
    "renderMode": 2,
    "route": "/RealEstateDoc/login"
  },
  {
    "renderMode": 2,
    "route": "/RealEstateDoc/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 33593, hash: '8dbcc2ed6cd09087f326160c6da6796fade2fdec805e68f6c1e3c16b61ea16b5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17156, hash: '97a6caafc436af465a533958b90472275f6b5f67f53f5620a8513a4fad0b156d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 34331, hash: '925e47e7d80e9d41faac4b966c6eb7c54a3b3c1f95f9ea2b7746c294748ffe3b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 34331, hash: '925e47e7d80e9d41faac4b966c6eb7c54a3b3c1f95f9ea2b7746c294748ffe3b', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-PFGSOLR2.css': {size: 341876, hash: 'P13Y9+w5lec', text: () => import('./assets-chunks/styles-PFGSOLR2_css.mjs').then(m => m.default)}
  },
};
