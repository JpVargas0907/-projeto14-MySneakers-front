import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import Sale from "./ sale";

export default function Payment() {
  const navigate = useNavigate();
  const [sum, select, setSelect] = useState("");
  const { cart } = useContext(UserContext);

  return (
    <>
      <Header>
        <div>
          <h1>My</h1>
          <h1 className="titulo">Sneackers</h1>
        </div>
      </Header>

      <Main>
        <div className="subTitle">
          <h1>Forma de Pagamento</h1>
        </div>

        <div>
          <Button
            select={select === "cartao"}
            onClick={() => {
              setSelect("cartao");
            }}
          >
            Cartão de crédito
          </Button>
          <Button
            select={select === "pix"}
            onClick={() => {
              setSelect("pix");
            }}
          >
            PIX
          </Button>
          <Button
            select={select === "boleto"}
            onClick={() => {
              setSelect("boleto");
            }}
          >
            Boleto Bancário
          </Button>
        </div>

        <div className="subTitle">
          <h1>Resumo do Pedido</h1>
        </div>

        <Sale cart={cart} />
      </Main>

      <Footer>
        <div>
          <h1>Total:</h1>
          <h1>{sum}</h1>
        </div>
        <button onClick={() => navigate("/products")}>FINALIZAR COMPRA</button>
      </Footer>
    </>
  );
}

const Header = styled.main`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;

  z-index: 1;

  top: 0;
  left: 0;

  height: 6rem;

  width: 100%;

  background: #277bc0;

  .price {
    display: flex;
  }

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

  display: flex;
  align-items: center;

  flex-direction: column;

  gap: 1rem;

  margin-top: 7.5rem;

  .subTitle {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    margin-top: 1rem;
  }

  h1 {
    font-weight: 700;
    font-size: 1.3rem;

    color: #ffb200;
  }

  div {
    width: 90%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-weight: 700;
      font-size: 1.3rem;

      color: #ffb200;
    }

    gap: 1rem;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 2.8rem;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;

  cursor: pointer;

  text-align: start;

  padding-left: 0.5rem;

  color: ${({ select }) => (select ? "#FFFFFF" : "#000000")};
  background: ${({ select }) => (select ? "#277BC0" : "#FFFFFF")};
  border: 0.1rem solid ${({ select }) => (select ? "#277BC0" : "#C4C1C1")};

  border-radius: 0.3rem;

  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Footer = styled.main`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 1rem;
  margin-bottom: 1rem;

  div {
    width: 90%;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 40%;

    margin-bottom: 1rem;
  }

  h1 {
    font-weight: 700;
    font-size: 1.4rem;

    color: #000000;
  }

  button {
    width: 90%;
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
`;
