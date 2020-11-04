import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {connect} from "react-redux";
import {getNumbers} from "../actions/getAction";


const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0 0 0;
  max-width: 650px;
  margin: 0 auto;
`;

const HeaderLogo = styled.div`
  position: relative;
  width: 56px;
  height: 50px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  transition: all .2s;
  border: 2px solid black;
  cursor: pointer;
  &:hover{
    background-color: white;
    a{
      color: black;
    }
  }
  a{
    display: block;
    width: 100%;
    height: 100%;
    font-size: 2rem;
    text-align: center;
    line-height: 50px;
    color: white;
    position: relative;
    margin: 0;
    transition: .2s;
    font-family: 'Inconsolata', monospace;
    text-decoration: none;
    font-weight: bold;
  }
  
`;

const HeaderNavigation = styled.nav`
  
`;
const HeaderList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 300px;
  padding: 0;
`;

const HeaderListItem = styled.ul`
  list-style: none;
  padding: 5px 20px;
  transition: .1s;
  cursor: pointer;
`;

const HeaderLink = styled(Link)`
   font-family: 'Inconsolata', monospace;
    position: relative;
    text-decoration: none;
    font-size: 16px;
    user-select: none;
    outline: none;
    width: 75px;

    color: black;
    transition: .2s;
    &:hover{
      color: darkred;
      border-bottom: 2px solid black;
    }

`;

const Header = (props) => {
    useEffect(() => {
        getNumbers();
    }, []);
    return (
        <HeaderWrapper>
            <HeaderLogo>
                <Link to='/' data-text="NewShop">NewShop</Link>
            </HeaderLogo>
            <HeaderNavigation>
                <HeaderList className='nav'>
                    <HeaderListItem>
                        <HeaderLink to='/clothing'>Clothing</HeaderLink>
                    </HeaderListItem>
                    <HeaderListItem>
                        <HeaderLink to='/shoes'>Shoes</HeaderLink>
                    </HeaderListItem>
                    <HeaderListItem>
                        <HeaderLink to='/accessories'>Accessories</HeaderLink>
                    </HeaderListItem>
                    <HeaderListItem>
                        <HeaderLink to='/cart'>Cart<span>({props.basketProps.basketNumbers})</span></HeaderLink>
                    </HeaderListItem>
                </HeaderList>
            </HeaderNavigation>
        </HeaderWrapper>
    );
};

const mapStateToProps = state => ({
    basketProps: state.basketState
});

export default connect(mapStateToProps, {getNumbers})(Header);

