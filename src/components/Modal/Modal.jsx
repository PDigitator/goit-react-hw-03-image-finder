import { Component } from 'react';
import { createPortal } from 'react-dom';
// import PropTypes from 'prop-types';

import { Overlay, ModalWrap } from 'components/Modal/Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <Overlay>
        <ModalWrap>{this.props.children}</ModalWrap>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;