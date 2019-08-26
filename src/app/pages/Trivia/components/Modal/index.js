import React, { useContext } from 'react';
import ReactModal from 'react-modal';
import { Button } from '../../../../components';
import game from '../../../../../game';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import TimerContext from '../../../../components/TimerContext';
import './index.scss';

function Modal({ categories, setCategory, rand4Categories, toggleModal, setToggleModal }) {
  const { setStartTime } = useContext(TimerContext);

  const handleChange = e => {
    setCategory(e.target.value);
    setToggleModal();
    setStartTime(Date.now());
  };

  return (
    <ReactModal
      className="ReactModal__Content"
      overlayClassName="ReactModal__Overlay"
      isOpen={toggleModal}
    >
      <label>Choose a category: </label>
      {categories.length > 0 && (
        <div className="ReactModal__Content--Categories">
          {rand4Categories.map(({ name, id }) => (
            <Button onClick={handleChange} key={id} value={id}>
              {name}
            </Button>
          ))}
        </div>
      )}
    </ReactModal>
  );
}

const enhance = compose(
  connect(
    state => ({
      categories: game.selectors.getCategories(state),
      rand4Categories: game.selectors.get4RandCategories(state),
      toggleModal: game.selectors.getToggleModal(state),
    }),
    dispatch =>
      bindActionCreators(
        {
          setCategory: game.actions.setCategory,
          setToggleModal: game.actions.toggleModal,
        },
        dispatch,
      ),
  ),
);

export default enhance(Modal);
