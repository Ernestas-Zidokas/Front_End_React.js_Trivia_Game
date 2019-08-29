import React, { useContext } from 'react';
import { TimerContext, Button } from '../../../components/';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import game from '../../../../game';

function Categories({ categories, setCategory, setToggleModal }) {
  const { setStartTime, setCurrentTime } = useContext(TimerContext);

  const handleChange = e => {
    setCategory(e.target.value);
    setToggleModal();
    setStartTime(Date.now());
    setCurrentTime(30);
  };

  return (
    <div>
      {categories.map(({ name, id }) => (
        <Button onClick={handleChange} key={id} value={id}>
          {name}
        </Button>
      ))}
    </div>
  );
}
const enhance = connect(
  state => ({
    categories: game.selectors.get4RandCategories(state),
  }),
  dispatch =>
    bindActionCreators(
      {
        setCategory: game.actions.setCategory,
        setToggleModal: game.actions.toggleModal,
      },
      dispatch,
    ),
);

export default enhance(Categories);
