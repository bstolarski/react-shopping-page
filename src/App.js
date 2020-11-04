import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from "./compontents/Header";
import GlobalStyles from "./style/globalStyles";
import Home from "./compontents/Home";
// import About from "./compontents/About";
import Clothing from "./compontents/Clothing";
// import Cart from "./compontents/Cart";
import styled from "styled-components";
import {Provider} from 'react-redux'
import store from "./store";
import Footer from "./compontents/Footer";
// import ProductDetails from "./compontents/ProductDetails";

const StyledWrapper = styled.div`
  max-width: 850px;
  margin: 0 auto;
`;


function App() {
  return (
    <Provider store={store}>
            <div className="App">
                <BrowserRouter>
                <Header/>
                    <StyledWrapper>
                        <>
                            <Switch>
                                <Route exact path='/'>
                                    <Home/>
                                </Route>
                                <Route path='/clothing'>
                                    <Clothing/>
                                </Route>
                            </Switch>
                            <GlobalStyles/>
                        </>
                    </StyledWrapper>
                    <Footer/>
                </BrowserRouter>
            </div>
        </Provider>
  );
}

export default App;
