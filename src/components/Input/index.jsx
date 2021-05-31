import PropTypes from 'prop-types';

import styles from './styles.module.scss';

function Input({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: '',
};

export default Input;
