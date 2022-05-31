import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 50px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between ;
`
const Left = styled.div`
    color: red;
`
const Center = styled.div`
    color: red;
`
const Right = styled.div`
    color: red;
`

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>Left</Left>
            <Center>Center</Center>
            <Right>Right</Right>
        </Wrapper>

    </Container>
  )
}

export default NavBar