import logo from '../../assets/logo.png'
import styled from 'styled-components';

export default function Header(){
    return (
        <Container>
            <Logo src={logo}/>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: #277BC0;
    width: 100vw;
    height: 80px;
    top: 0px;
    z-index: 1;
`

const Logo = styled.img`
    width: 139px;
    height: 24px;
`
