import styled from "styled-components";
import bota from "../imgs/bota.svg";
import jaqueta from "../imgs/jaqueta.svg";

export default function Sale(props) {
  return (
    <Main>
      <ul>
        {props.teste.map((e, i) => {
          return (
            <li key={i}>
              <span>
                <img src={jaqueta} />
                <p>{e.nome}</p>
                <p>{e.preco}</p>
              </span>
            </li>
          );
        })}
      </ul>
    </Main>
  );
}

const Main = styled.main`
  width: 80%;
  ul {
    width: 100%;
    height: 50vh;

    position: relative;
    display: flex;
    align-items: center;

    flex-direction: column;

    gap: 1rem;

    overflow-y: scroll;
  }

  li {
    width: 100%;
  }

  span {
    width: 100%;
    height: 6rem;

    display: flex;
    align-items: center;
    justify-content: space-around;

    border-bottom: 0.1px solid #c4c1c1;

    gap: 1rem;
  }

  p {
    font-weight: 400;
    font-size: 0.9rem;

    color: #000000;
  }
`;
