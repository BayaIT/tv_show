import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../store/slices/userSlice";

function RegistrationPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleRegister = () => {
    dispatch(register({ email, name }));
  };

  return (
    <div style={{ textAlign: "center", marginTop: 50 }}>
      <h2>Регистрация пользователей</h2>
      <input
        type="text"
        placeholder="Имя"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="email"
        placeholder="Почта"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button onClick={handleRegister}>Регистрация</button>
    </div>
  );
}

export default RegistrationPage;