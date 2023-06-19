import PropTypes from 'prop-types';

import { LoadMoreBtn } from 'components/Button/Button.styled';

const Button = ({ text }) => {
  return <LoadMoreBtn type="button">{text}</LoadMoreBtn>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
