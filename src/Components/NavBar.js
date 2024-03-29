import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import {mobile} from '../responsive'
import {Link} from 'react-router-dom'

const Container = styled.div`
    height: 60px;
    ${mobile({height: '50px'})}
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between ;
    align-items:center;
    ${mobile({padding: '10px 0'})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer ;
    ${mobile({display: 'none'})}
`
const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
    outline: none;
    ${mobile({width: '50px'})}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Header = styled.h1`
    font-weight: bold;
    ${mobile({fontSize: '24px'})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    ${mobile({flex:2, justifyContent: 'center'})}
`

const MenuItems = styled.div`
    font-size: 14px ;
    cursor: pointer;
    display: flex;
    margin-left: 25px;
    ${mobile({fontSize: '12px', marginLeft: '10px' })}
`

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                   <Input placeholder='search'/> 
                   <Search style={{color:"gray", fontSize:16 }} />
                </SearchContainer>
            </Left>
            <Center>
                <Header>JOHN.</Header>
            </Center>

            <Right>
                <Link style={{textDecoration: 'none'}} to='/login'>
                <MenuItems>SIGN IN</MenuItems>
                </Link>
                
                <Link style={{textDecoration: 'none'}} to='/register'>
                <MenuItems>REGISTER</MenuItems>
                </Link>
                <Link style={{textDecoration: 'none'}} to='/cart'>
                <Badge badgeContent={100} color="primary">
                <ShoppingCartOutlined />
                </Badge>
                </Link>
            </Right>
        </Wrapper>

    </Container>
  )
}

export default NavBar