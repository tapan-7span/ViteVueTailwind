import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// import VList from "@7span/vue-list-v3";
import axios from "axios";
// import qs from "qs";

const app = createApp(App);
// app.use(VList, {
//   requestHandler(data) {
//     const { endpoint, pagination, search, sort, filters } = data;
//     const { page, perPage } = pagination;
//     return axios
//       .get(endpoint, {
//         params: {
//           page,
//           per_page: perPage,
//           search,
//           sort_by: sort.by,
//           sort_order: sort.order,
//           filter: filters,
//         },
//         paramsSerializer: (params) => qs.stringify(params),
//       })
//       .then((res) => {
//         return {
//           items: res.data?.data,
//           count: res.data.meta.total,
//         };
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   },
// });

app.mount("#app");
