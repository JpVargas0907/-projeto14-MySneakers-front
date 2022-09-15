import styled from "styled-components";
import Header from "../Header/Header";
import banner from '../../assets/banner.png'
import { useState , useEffect } from "react";
import axios from "axios";

export default function ProductsScreen(){
    const [ productsList, setProductsList ] = useState([]);
    const token = '89d4f052-c3a8-4752-9248-603b1cff67e4';
    
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const URL = "http://localhost:5000/products";
        const promise = axios.get(URL, config);

        promise.then((res) => {
            const { data } = res;
            setProductsList([...data]);
        });

        promise.catch((err) => {
            alert(err.message);
        });
    }, []);

    function buildProductsList(){
        if(productsList.length > 0){
            productsList.map((product, id ) => {
                const { image_url, name, brand, price } = product;
                return <Product key={id} image_url={image_url} name={name} brand={brand} price={price}/>
            });
        } else {
            return <p>Não há produtos!</p>
        }
    }

    return(
        <Container>
            <Header />
            <Banner src={banner}/>
            <ProductsContainer>
                {buildProductsList()}
            </ProductsContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

const Banner = styled.img`
    margin-top: 80px;
    width: 100vw;
    object-fit: fill;
`

const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

function Product(props){
    const { id, image_url, name, brand, price } = props;

    return(
        <ProductContainer>
            <ProductImage src={image_url} alt='imagem do produto'/>
            <ProductName>{name}</ProductName>
            <ProductPrice>{price}</ProductPrice>
            <BuyButton>COMPRAR</BuyButton>
        </ProductContainer>
    );
}

const ProductContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ProductImage = styled.img`
    width: 187px;   
    height: 187px;
`

const ProductName = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;   
`

const ProductPrice = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
`


const BuyButton = styled.button`
    background: #277BC0;
    border-radius: 10px;
    border-style: none;
    width: 133px;
    height: 26px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: #FFFFFF;
`