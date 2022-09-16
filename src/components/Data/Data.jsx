import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";

export default function Delivery() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState("CONTINUAR");
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
  }

  return (
    <>
      <Header>
        <div>
          <h1>My</h1>
          <h1 className="titulo">Sneackers</h1>
        </div>
      </Header>

      <Main>
        <div>
          <h2>Dados de Entrega</h2>
        </div>

        <form>
          <input
            name="cep"
            type="number"
            onChange={handleForm}
            value={form.cep}
            placeholder="CEP"
            disabled={block}
            required
          />

          <input
            name="cidade"
            type="text"
            onChange={handleForm}
            value={form.cidade}
            placeholder="Cidade"
            disabled={block}
            required
          />

          <input
            name="endereço"
            type="text"
            onChange={handleForm}
            value={form.endereço}
            placeholder="Endereço"
            disabled={block}
            required
          />

          <input
            name="bairro"
            type="text"
            onChange={handleForm}
            value={form.bairro}
            placeholder="Bairro"
            disabled={block}
            required
          />

          <input
            name="numero"
            type="number"
            onChange={handleForm}
            value={form.numero}
            placeholder="Número"
            disabled={block}
            required
          />

          <button onClick={login}>{loading}</button>
        </form>
      </Main>
    </>
  );
}

const Header = styled.main`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;

  height: 6rem;
  width: 100%;

  background: #277bc0;

  h1 {
    font-weight: 700;
    font-size: 1.7rem;
    line-height: 2.9rem;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    .titulo {
      color: #ffb200;
    }
  }
`;

const Main = styled.main`
  width: 100%;
  height: 100vh;

  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    width: 90%;
    display: flex;
    align-items: flex-start;
    align-items: flex-start;
  }

  h2 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;

    color: #ffb200;

    margin-bottom: 1rem;
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
  }
`;
