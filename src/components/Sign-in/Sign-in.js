import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useState, useContext } from "react";
import Context from "../../contexts/UserContext";

export default function SignIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState("ENTRAR");
  const [block, setBlock] = useState(false);
  const [form, setForm] = useState({});
  const [blockButton, setBlockButton] = useState(false);
  const { setToken, setEmail } = useContext(Context);

  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function login(event) {
    event.preventDefault();
    setLoading(<ThreeDots color="white" />);
    if (form.email === "" || form.password === "") {
      alert("Emaill ou senha esta em branco");
      setLoading("ENTRAR");
      return;
    } else {
      const body = { ...form };
      axios
        .post("http://localhost:5000/sign-in", body)
        .then((res) => {
          setBlock(true);
          setToken(res.data.token);
          setEmail(res.data.id);
          navigate("/home");
          setBlockButton(true);
        })
        .catch(() => {
          setBlockButton(true);
          setBlock(true);
          alert("Login ou senha inválidos");
          setLoading("ENTRAR");
          setBlock(false);
          setBlockButton(false);
        });
    }
  }

  return (
    <Main>
      <div>
        <h1>My</h1>
        <h1 className="titulo">Sneackers</h1>
      </div>

      <form>
        <input
          name="email"
          type="email"
          onChange={handleForm}
          value={form.email}
          placeholder="Email"
          disabled={block}
          required
        />

        <input
          name="password"
          type="password"
          onChange={handleForm}
          value={form.password}
          placeholder="Senha"
          disabled={block}
          required
        />

        <button onClick={login}>{loading}</button>
      </form>
      <p onClick={() => navigate("/sign-up")}>
        Não tem uma conta? Cadastre-se!
      </p>
    </Main>
  );
}

const Main = styled.main`
  width: 100%;
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  div {
    display: flex;
    gap: 0.9rem;
    .titulo {
      color: #ffb200;
    }
    margin-bottom: 1rem;
  }
  h1 {
    font-weight: 700;
    font-size: 2.2rem;
    line-height: 2.9rem;
  }
  p {
    font-size: 1rem;
    text-align: center;
    text-decoration-line: underline;
    margin-top: 0.8rem;
    color: #ffb200;
  }
  form {
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    gap: 0.8rem;

    input {
      width: 100%;
      height: 3rem;
      background: #ffffff;
      border: 0.1rem solid #c4c1c1;
      border-radius: 0.5rem;
    }

    input::placeholder {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      padding-left: 0.5rem;
      color: #c4c1c1;
    }

    button {
      width: 100%;
      height: 3rem;
      background: #277bc0;
      border-radius: 0.5rem;
      border: none;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 1.5rem;
      color: #ffffff;
    }

    div {
      display: flex;
    }
  }
`;
