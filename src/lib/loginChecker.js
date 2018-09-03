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
  } else if (to.matched.some(record => record.meta.requireVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: "home"
      });
    } else {
      next();
    }
  } else {
    next();
  }
};
