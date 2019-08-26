import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Layout } from './components';
import { Trivia } from './pages';
import store from './state';
import game from '../game';
import ReactModal from 'react-modal';
import './index.scss';

ReactModal.setAppElement('#root');

function App() {
  useEffect(() => {
    store.dispatch(game.actions.getCategories());
  });

  return (
    <Provider store={store}>
      <Layout>
        <Trivia />
      </Layout>
    </Provider>
  );
}

export default App;
