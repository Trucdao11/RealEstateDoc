
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
    'index.csr.html': {size: 33006, hash: '539d5a2d67f91fda46e8801a3897ad284cb004ed372a715ccb1c4ac35534ec6f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17156, hash: '050e98e4cffe875741a35a85d2cd6bc1677bf4f3d92f9fed6705fa54b011cb88', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 33712, hash: 'b8930f46097bdaabea6839fd4d447d1df84253a4b4880e18f4bd248c5acb062a', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 33712, hash: 'b8930f46097bdaabea6839fd4d447d1df84253a4b4880e18f4bd248c5acb062a', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-OJL35ALE.css': {size: 333663, hash: 'XuFTKl2ysdM', text: () => import('./assets-chunks/styles-OJL35ALE_css.mjs').then(m => m.default)}
  },
};
