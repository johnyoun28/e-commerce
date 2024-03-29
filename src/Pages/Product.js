
import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../Components/Announcement'
import Footer from '../Components/Footer'
import NavBar from '../Components/NavBar'
import Newsletter from '../Components/Newsletter'
import { mobile } from '../responsive'

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({padding: '10px 0', flexDirection: 'column'})}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: '40%'})}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: '10px'})}
`
const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 200;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    ${mobile({width: '100%'})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({width: '100%'})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items:center ;
    font-weight: 700;
`
const Amount = styled.span`
    display: flex;
    align-items: center;
    justify-content:center;
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    margin: 0 5px;
`
const Button = styled.button`
    border: 2px solid teal;
    background-color: white;
    padding: 15px;
    cursor: pointer;
    font-weight: 500;

    &:hover {
        background-color: #f8f4f4;
    }
`




const Product = () => {
  return (
    <Container>
        <NavBar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src='https://i.ibb.co/S6qMxwr/jean.jpg'/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Desc>
                <Price>$ 20</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color='black' />
                        <FilterColor color='darkblue' />
                        <FilterColor color='gray' />
                    </Filter>
                    <Filter>

                        <FilterTitle>Size</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>   
                    </Filter>

                </FilterContainer>
                <AddContainer>

                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Add to cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product