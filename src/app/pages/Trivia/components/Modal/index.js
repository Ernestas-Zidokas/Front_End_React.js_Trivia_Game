import React from 'react';
import ReactModal from 'react-modal';
import { DropDown } from '../../../../components';
import game from '../../../../../game';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import './index.scss';

function Modal({ categories, setCategory }) {
  const handleChange = e => {
    setCategory(e.target.value);
  };

  return (
    <ReactModal isOpen={true}>
      Test modal
      <DropDown
        onChange={handleChange}
        items={categories.map(({ id, name }) => ({
          value: id,
          children: name,
        }))}
      />
    </ReactModal>
  );
}

const enhance = compose(
  connect(
    state => ({
      categories: game.selectors.getCategories(state),
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
