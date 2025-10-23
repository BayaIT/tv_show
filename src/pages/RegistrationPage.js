import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    register, 
    registrationFailed, 
    registrationSuccess, 
    clearUserMessage 
} from '../store/slices/userSlice'; 
import './RegistrationPage.css';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => state.user); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
        // Простая валидация: диспетчеризация ошибки, если поля пустые
        dispatch(registrationFailed("Пожалуйста, заполните все поля (Имя, Email, Пароль)."));
        return; 
    }
  
    dispatch(register({ email, password, name }));
    setEmail('');
    setName('');
    setPassword('');
  };

  useEffect(() => {
    let timer;
    if (message || error) {
      timer = setTimeout(() => {
        dispatch(clearUserMessage());
      }, 5000); 
    }
    
    return () => {
      clearTimeout(timer);
    };
  }, [message, error, dispatch]);
  
  return (
    <div className="registration-container">
      {/* Используем форму для стилизации и отправки */}
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2>Регистрация в Gotham</h2>
        
        {/* Отображение сообщений об успехе/ошибке */}
        {message && (
          <div className="message-box message-success">
            {message}
          </div>
        )}
        
        {error && (
          <div className="message-box message-error">
            {error}
          </div>
        )}
        
        {/* Поле для Имени */}
        <div className="form-group">
          <label htmlFor="name">Имя</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Введите ваше имя"
          />
        </div>

        {/* Поле для Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Введите ваш email"
          />
        </div>
        
        {/* Поле для Пароля */}
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Придумайте пароль"
          />
        </div>
        
        <button type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
