import store from "../store";

export default (to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: "login"
      });
    } else {
      next();
    }
  } else {
    next();
  }
};
