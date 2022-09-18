//Components
import Header from "../Header/Header";

//icons and images 
import banner from '../../assets/banner.png';
import cartIcon from '../../assets/icone-carrinho.png';

//libs 
import styled from "styled-components";
import { useState , useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";


export default function ProductsScreen(){
    const [ productsList, setProductsList ] = useState([]);
    const [product, setProduct] = useState({});
    const { cart, setCart, itensCounter, setItensCounter } = useContext(UserContext);
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
            return productsList.map((product, id ) => {
                const { image_url, name, brand, price } = product;
                return <Product key={id} image_url={image_url} name={name} brand={brand} price={price} cart={cart} setCart={setCart} product={product} setProduct={setProduct} itensCounter={itensCounter} setItensCounter={setItensCounter}/>
            });
        } else {
            return <p>Não há produtos!</p>
        }
    }

    return(
        <Container>
            <Header />
            <Link to={'/cart'}>
                <CartIcon>
                    <img src={cartIcon}/>
                    <p>{itensCounter}</p>
                </CartIcon>
            </Link>
            <Banner src={banner}/>
            <PageTittle>ESCOLHA O SEU  PAR PERFEITO</PageTittle>
            <ProductsContainer>
                {buildProductsList()}
            </ProductsContainer>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Banner = styled.img`
    margin-top: 80px;
    width: 100vw;
    object-fit: fill;
    margin-bottom: 28px;
`

const CartIcon = styled.div`
    width: 35px;
    height: 35px;
    position: fixed;
    z-index: 1;
    top: 20px;
    right: 12px;

    p {
        position: fixed;
        top: 20px;
        right: 12px;
        z-index: 2;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        color: #FFB200;
    }
`

const PageTittle = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
`

const ProductsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
`

function Product(props){
    const { id, image_url, name, brand, price, cart, setCart, product, setProduct, itensCounter, setItensCounter } = props;

    function addToCart(){
        setProduct({image_url: image_url, name: name, price: price});
        setCart([...cart, product]);        
        setItensCounter(itensCounter + 1);
    }

    return(
        <ProductContainer>
            <ProductImage src={image_url} alt='imagem do produto'/>
            <ProductName>{name}</ProductName>
            <ProductPrice>{price}</ProductPrice>
            <BuyButton>COMPRAR</BuyButton>
            <AddToCart onClick={addToCart}>adicionar ao carrinho</AddToCart>
        </ProductContainer>
    );
}

const ProductContainer = styled.div`
    width: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
`

const ProductImage = styled.img`
    width: 187px;   
    height: 187px;
    margin-bottom: 10px;
`

const ProductName = styled.p`
    height: 20px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;   
    margin-bottom: 10px;
    text-align: center;
`

const ProductPrice = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    margin-bottom: 10px;
`


const BuyButton = styled.button`
    background: #277BC0;
    border-radius: 10px;
    border-style: none;
    width: 133px;
    height: 26px;
    margin-bottom: 5px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    color: #FFFFFF;
`

const AddToCart = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    color: #FFB200;
    text-decoration: underline;
`