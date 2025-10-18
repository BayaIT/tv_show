const registrationMiddleware = (store) => (next) => (action) => {
  if (action.type === "user/register") {
    const existingUser = store
      .getState()
      .user.users.find((u) => u.email === action.payload.email);

    if (existingUser) {
      alert("Такой пользователь уже есть!");
      return;
    } else {
      alert("Регистрация прошла успешно");
    }
  }

  return next(action);
};

export default registrationMiddleware;