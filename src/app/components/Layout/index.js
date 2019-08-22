import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';
import './index.scss';

const Main = styled.main`
  max-width: 1020px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-grow: 1;
`;

function Layout({ children }) {
  return (
    <div className="Layout">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

export default Layout;
