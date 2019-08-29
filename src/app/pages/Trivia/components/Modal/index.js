import React from 'react';
import ReactModal from 'react-modal';
import { Loader } from '../../../../components';
import game from '../../../../../game';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Play, Life, ModalTitle, Categories } from '../../components';
import './index.scss';

function Modal({ categories, toggleModal, loading, toggleInGame, setToggleInGame, life }) {
  return (
    <ReactModal
      className="ReactModal__Content"
      overlayClassName="ReactModal__Overlay"
      isOpen={toggleModal}
    >
      {!toggleInGame && <Play setToggleInGame={setToggleInGame} />}
      {toggleInGame && (
        <div className="ReactModal__Content--Categories">
          <Life life={life} />
          <ModalTitle />
          {loading && <Loader />}
          {categories.length > 0 && <Categories />}
        </div>
      )}
    </ReactModal>
  );
}

const enhance = connect(
  state => ({
    categories: game.selectors.getCategories(state),
    toggleModal: game.selectors.getToggleModal(state),
    loading: game.selectors.getCategoryLoading(state),
    toggleInGame: game.selectors.getToggleInGame(state),
    life: game.selectors.getLifeCount(state),
  }),
  dispatch =>
    bindActionCreators(
      {
        setToggleInGame: game.actions.toggleInGame,
      },
      dispatch,
    ),
);

export default enhance(Modal);
