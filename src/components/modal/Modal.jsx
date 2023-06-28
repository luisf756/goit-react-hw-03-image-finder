// import  { Component } from 'react';
import PropTypes from 'prop-types';
// import { createPortal } from 'react-dom';
import  './Modal.css';

// const modalRoot = document.getElementById('modal-root');

// export class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = (e) => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleClickBackdrop = (e) => {
//     if (e.target === e.currentTarget) {
//       this.props.onClose();
//     }
//   };

//   render() {
//     return createPortal(
//       <div className='Overlay' onClick={this.handleClickBackdrop}>
//         <div className='ModalStyled'>{this.props.children}</div>
//       </div>,
//       modalRoot
//     );
//   }
// }


export const Modal  = ({children, onClose})=>{
  
  return (
    <article className='modal is-open' >
      <div className='modal-container'>
        <button class='modal-close' onClick={onClose} >X</button>
        
        {children}
      </div>
    </article>
  )
}


Modal.propTypes = {
  children: PropTypes.node,
  //  onClose: PropTypes.func.isRequired,
};