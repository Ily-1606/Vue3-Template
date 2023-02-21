const isAuth = () => {
  return true;
};

const onlyUser = () => {
  return isAuth() ? true : { name: "login" };
};
const onlyGuess = () => {
  return !isAuth() ? true : { name: "home" };
};

export { onlyUser, onlyGuess };
