import React from 'react';
import ReactModal from 'react-modal';
import { Button } from '../../../../components';
import game from '../../../../../game';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import './index.scss';

function Modal({ categories, setCategory, rand4Categories }) {
  const handleChange = e => {
    setCategory(e.target.value);
  };

  return (
    <ReactModal
      className="ReactModal__Content"
      overlayClassName="ReactModal__Overlay"
      isOpen={true}
    >
      <label>Categories: </label>
      {categories.length > 0 && (
        <div>
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
    }),
    dispatch =>
      bindActionCreators(
        {
          setCategory: game.actions.setCategory,
        },
        dispatch,
      ),
  ),
);

export default enhance(Modal);
