import { defineConfig } from 'umi';

const dev = process.env.NODE_ENV === 'development';

export default defineConfig({
  mountElementId: 'uc-web',
  styles: [
    `html,body{height:100%}
     #uc-web{height:100%;width:100%;position: relative;${
       dev ? 'background:#f0f0f0' : ''
     }}
    `,
  ],
  theme: {
    'primary-color': '#FA8500',
  },
  title: '集成中心',
  publicPath: './',

  dynamicImport: {
    loading: 'ls-pro-common/lib/components/Loading',
  },
  hash: true,

  ignoreMomentLocale: true,

  nodeModulesTransform: {
    type: 'none',
  },

  routes: [
    { path: '/user', component: '@/pages/user' },
    { path: '/role', component: '@/pages/role' },
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        { path: '/my/user', component: '@/pages/user' },
        { path: '/my/role', component: '@/pages/role' },
      ],
    },
    { component: '@/components/404' },
  ],
  fastRefresh: {},
  qiankun: {
    slave: {},
  },

  outputPath: 'docs',
  history: { type: 'hash' },
  proxy: {},
  // mfsu: {}
});
