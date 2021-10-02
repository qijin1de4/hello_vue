import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// 引入animate实现动画效果
import "animate.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

library.add(faShoppingCart);

createApp(App)
  .use(router)
  .component("fa", faShoppingCart)
  .mount("#app");
