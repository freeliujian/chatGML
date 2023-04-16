export default [
  {
    name: 'chat',
    path: '/chat',
    component: './Chat',
    layout: false,
  },
  {
    path: '/welcome',
    name: 'welcome',
    icon: 'smile',
    component: './Welcome',
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      {
        name: 'user',
        path: '/admin/user',
        component: './UserManage',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'prompt',
    icon: 'table',
    path: '/prompt',
    component: './PromptWord',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
