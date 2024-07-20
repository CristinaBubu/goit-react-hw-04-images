import PropTypes from 'prop-types';
import css from './Button.module.css';

export default function Button({ onBtnClick }) {
  return (
    <button 
    className={css.load_btn} 
    onClick={onBtnClick}
    >
      Load more
    </button>
  );
}

Button.propTypes = {
  onBtnClick: PropTypes.func.isRequired,
};