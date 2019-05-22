// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  // Use the Bootstrap Vue Library. 
  Vue.use(BootstrapVue);

  // 
  head.meta.push({
    name: 'description',
    content: 'Chương trình 10 tuần đào tạo và thi đấu dành cho 300 sinh viên được chọn tại Tp. HCM. Học phí được tài trợ toàn phần bởi Developer Circles từ Facebook.'
  });
  head.meta.push(
    {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'}
  );
  head.meta.push(
    {name: 'viewport', content: 'width=device-width, initial-scale=1'},
  );

  head.meta.push(
    {property: 'og:image', content: 'https://i.imgur.com/XKMNxrv.png'},
  )


}
