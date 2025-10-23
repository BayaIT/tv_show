const registrationMiddleware = (store) => (next) => (action) => {
  // Проверяем, является ли действие попыткой регистрации
  if (action.type === "user/register") {
    // Получаем список пользователей из текущего состояния
    const existingUser = store
      .getState()
      .user.users.find((u) => u.email === action.payload.email);

    if (existingUser) {
      // Если пользователь существует, диспетчеризируем действие об ошибке
      store.dispatch({
        type: "user/registrationFailed",
        payload: "Такой пользователь уже зарегистрирован!",
      });
      // Блокируем исходное действие 'user/register', чтобы оно не попало в редуктор
      return; 
    }

    // Если пользователя нет, позволяем исходному действию пройти дальше.
    // Редуктор добавит нового пользователя, а затем мы оповестим об успехе.
    const result = next(action); 

    // Диспетчеризация действия об успехе после того, как редуктор обновил состояние
    store.dispatch({
        type: "user/registrationSuccess",
        payload: "Регистрация прошла успешно. Добро пожаловать!",
    });

    return result;
  }

  return next(action);
};

export default registrationMiddleware;
