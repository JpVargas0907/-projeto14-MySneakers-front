// components
import Header from "../Header/Header";

// icons e images 
import trashIcon from "../../assets/icone-lixeira.png";

// libs
import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import { Report } from "notiflix/build/notiflix-report-aio";


export default function CartScreen(){
    const { sum, setSum, cart, setCart, itensCounter, setItensCounter } = useContext(UserContext);
        

    function builCartItens(){
        if(cart.length > 0){
            return cart.map((item, id) => {
                const { image_url, name, price } = item;
                
                return <CartItem key={id} cart={cart} setCart={setCart} itensCounter={itensCounter} setItensCounter={setItensCounter} image_url={image_url} name={name} price={price} sum={sum} setSum={setSum}/>
            });
        } else {
            return <p>Não há itens no seu carrinho de compra!</p>
        }
    }

    function sumPrices(){
        let soma = 0;
        cart.map(item => {
            let { price } = item;
            let convertedPrice  = parseFloat(price);
            soma += convertedPrice;
        });

        setSum(soma.toFixed(2));
    }

    useEffect(() => {
        setSum(0);
        sumPrices();
    }, [cart]);

    return(
        <Container>
            <Header/>
            <ScreenTittle>Carrinho de Compras</ScreenTittle>
            <ProductsContainer>
                {builCartItens()}
            </ProductsContainer>
            <TotalContainer>
                <p>Total:</p>
                <p>R$ {sum}</p>
            </TotalContainer>
            <Link to={'/payment'}>
                <BuyButton>FINALIZAR COMPRA</BuyButton>
            </Link>
            <Link to={'/products'}>
                <BackToHome>Ver mais produtos</BackToHome>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

const ScreenTittle = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    color: #FFB200;
    margin-top: 100px;
`

const TotalContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 280px;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;

    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 22px;
        color: #000000;
    }
`


const BuyButton = styled.button`
    width: 280px;
    height: 45px;
    background: #277BC0;
    border-radius: 5px;
    border-style: none;
    margin-bottom: 5px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    color: #ffffff;
`

const BackToHome = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #FFB200;
    text-decoration: underline;
    margin-bottom: 20px;
`

function CartItem(props){
    const {cart, setCart, itensCounter, setItensCounter, image_url, name, price } = props;

    function removeItem(){
        let newCartList = [];
        if(window.confirm("Deseja remover esse item do carrinho?") === true){
            cart.map(item => {
                if(item.name !== name){
                    newCartList.push(item);
                }
            });

            setCart(newCartList);
            setItensCounter(itensCounter - 1);
        }
    }

    return(
        <ItemContainer>
            <TrashIcon onClick={removeItem} src={trashIcon}/>
            <Column1>
                <ProductImage src={image_url} alt='imagem do produto'/>
            </Column1>
            <Column2>
                <ProductName>{name}</ProductName>
                <ProductPrice>{price}</ProductPrice>
            </Column2>
        </ItemContainer>
    );
}

const ItemContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-bottom: 1px solid #C4C1C1;
    position: relative;
`

const ProductImage = styled.img`
    width: 80px;   
    height: 80px;
    margin-bottom: 10px;
`

const ProductName = styled.p`
    height: 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;   
    margin-bottom: 10px;
    text-align: right;
    margin-bottom: 20px;
    margin-top: 20px;
`

const ProductPrice = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
    text-align: right;
`
const TrashIcon = styled.img`
    width: 12px;
    height: 12px;
    position: absolute;
    right: 0px;
    top: 0px;
`


const Column1 = styled.div`
    width:50%;
`

const Column2 = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
`