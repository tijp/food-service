import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

import Home from '../Home';
import Products from '../Products';
import Info from '../Info';
import Contact from '../Contact';
import Basket from '../Basket';
import Checkout from '../Checkout';
import FAQ from '../FAQ';

const MaxWidth = styled.div`
  flex: 1;
  margin: 0 auto;
  width: 100%; max-width: 1238px;
  /* padding: 32px; // Desktop */
  /* padding: 24px 16px; // Mobile */
`;

const Routes = () => (
  <Router>
    <ScrollToTop>
      <MaxWidth>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/info/:id" component={Info} />

          <Route path="/basket" component={Basket} />
          <Route path="/checkout" component={Checkout} />
          
          <Route path="/faq" component={FAQ} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </MaxWidth>

      <Footer />
    </ScrollToTop>
  </Router>
);

export default Routes;
