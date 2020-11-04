import React from "react";
import data from "../data/clothes"
import Product from "./Product";
import styled from "styled-components";


const ClothingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 30px auto;
  max-width: 750px;
  @media(min-width: 400px){
    justify-content: space-evenly;
  }
`;

const Clothing  = (props) => {
    return (
        <ClothingWrapper className='home'>
            {
                data.clothing.map((value, index) => {
                    let image = require(`../assets/images${value.photo}`);
                    let hoverImage = require(`../assets/images/h1back.png`);
                    return (
                        <>
                            <Product img={image}
                                     title={value.name}
                                     price={value.price}
                                     descritpion={value.description}
                                     key={index}
                                     id={value.id}
                                     type={value.type}
                                     hover={hoverImage}
                                     sizes={value.sizes}
                            />
                        </>
                    )
                })
            }
        </ClothingWrapper>
    )
};

export default Clothing