import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home/Home';
import Info from './pages/Info';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

const MaxWidth = styled.div`
  margin: 0 auto;
  max-width: 1238px;
  /* padding: 32px; // Desktop */
  /* padding: 24px 16px; // Mobile */
`;

const App = () => (
  <Router>
    <ScrollToTop>
      <MaxWidth>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/info/:id" component={Info} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </MaxWidth>

      <Footer />
    </ScrollToTop>
  </Router>
);

export default App;
