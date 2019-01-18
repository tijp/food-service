import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import ScrollToTop from '../../components/ScrollToTop';

import Home from '../Home';
import Info from '../Info';
import Contact from '../Contact';
import FAQ from '../FAQ';
import About from '../About';
import Basket from '../Basket';
import Checkout from '../Checkout';

const MaxWidth = styled.div`
  flex: 1;
  margin: 0 auto;
  width: 100%;
  max-width: 1056px;
`;

const Routes = () => (
  <Router>
    <ScrollToTop>
      <MaxWidth>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/info/:id" component={Info} />

          <Route path="/winkelwagen" component={Basket} />
          <Route path="/bestellen" component={Checkout} />
          
          <Route path="/vragen" component={FAQ} />
          <Route path="/contact" component={Contact} />
          <Route path="/over-ons" component={About} />
          <Redirect to="/" />
        </Switch>
      </MaxWidth>

      <Footer />
    </ScrollToTop>
  </Router>
);

export default Routes;
