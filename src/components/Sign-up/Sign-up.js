import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { toast } from "react-toastify";
import { Report } from "notiflix/build/notiflix-report-aio";

export default function SignUp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState("Cadastrar");
  const [block, setBlock] = useState(false);
  const [form, setForm] = useState({});

  function handleForm(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function login(event) {
    event.preventDefault();
    setLoading(<ThreeDots color="white" />);

    if (
      form.email === "" ||
      form.password === "" ||
      form.name === "" ||
      form.passwordConfirm === "" ||
      form.cep === "" ||
      form.numero === ""
    ) {
      toast.error("E-mail ou senha esta em branco", {
        toastId: "branco",
      });
      setLoading("Cadastrar");
      return;
    } else {
      const body = { ...form };
      axios
        .post(`https://projeto14.herokuapp.com/sign-up`, body)
        .then(() => {
          setBlock(true);
          Report.success("Cadastrado com sucesso", '"Seja bem-vindo" ', "Okay");
          navigate("/");
        })
        .catch((err) => {
          setBlock(true);
          toast.error("Algo esta faltando", {
            toastId: "err",
          });
          setLoading("Cadastrar");
          setBlock(false);
          console.log(err);
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
          name="name"
          type="text"
          onChange={handleForm}
          value={form.name}
          placeholder="Nome"
          disabled={block}
          required
        />

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

        <input
          name="passwordConfirm"
          type="password"
          onChange={handleForm}
          value={form.passwordConfirm}
          placeholder="Confirme sua senha"
          disabled={block}
          required
        />

        <div>
          <div className="subTitle">
            <h2>Dados de Entrega</h2>
          </div>

          <input
            name="cep"
            type="text"
            onChange={handleForm}
            value={form.cep}
            placeholder="CEP"
            disabled={block}
            required
          />
          <input
            name="numero"
            type="text"
            onChange={handleForm}
            value={form.numero}
            placeholder="Número"
            disabled={block}
            required
          />
        </div>

        <button onClick={login}>{loading}</button>
      </form>
      <p onClick={() => navigate("/")}>Não tem uma conta? Cadastre-se!</p>
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
      width: 100%;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      margin-top: 0.2rem;

      .subTitle {
        display: flex;
        justify-content: center;
        align-items: flex-start;

        margin-bottom: -0rem;
      }

      h2 {
        font-weight: 700;
        font-size: 1.3rem;

        color: #ffb200;
      }
    }
  }
`;
