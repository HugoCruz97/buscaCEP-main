import { useState } from "react";
import { app } from "../../utils/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Content, Container, Label, Input, InputButton, Titulo } from "./style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAction = (event) => {
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        window.location.href = "/home";
        console.log("sucess");
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  return (
    <>
      <Container>
        <Content>
          <Titulo>buscaCEP</Titulo>
          <Label>Email:</Label>
          <Input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Input>
          <Label>Senha:</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <InputButton
            type="submit"
            value="Entrar"
            id="login"
            onClick={handleAction}
          />
        </Content>
      </Container>
    </>
  );
};

export default Login;
