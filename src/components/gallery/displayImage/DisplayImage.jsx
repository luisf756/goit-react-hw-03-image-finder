// import React, { Component } from 'react'
import styles from './displayImage.css';
import { Modal } from '../../modal/Modal';
import { useModal } from 'components/modal/useModal';


export const DisplayImage =({url,alt,largeImage})=> {
  
    const [isOpen,opeModal,closeModal]=useModal(false);

    return (
      <>
        <div className={styles['item']} onClick={opeModal}>
          <img className={styles['card']} src={url} alt={alt} loading="lazy" />
        </div>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={closeModal}> 
            <img alt={alt} src={largeImage} />
          </Modal>
          
        )}
      </>
    );  
}


// export class DisplayImage extends Component {
  
//   state = {
//     isShowModal: false,
    
//   };

//   toggleModal = () => {
//     this.setState((prevState) => ({
//       isShowModal: !prevState.isShowModal,
//     }));
//   };
//   render() {
//     const { url, alt, largeImage } = this.props;
//     const { isShowModal } = this.state;
//     // const [isOpen,opeModal,closeModal]=useModal(false);

//     return (
//       <>
//         <div className={styles['item']} onClick={this.toggleModal}>
//           <img className={styles['card']} src={url} alt={alt} loading="lazy" />
//         </div>
//         {isShowModal && (
//           <Modal onClose={this.toggleModal}> 
//             <img alt={alt} src={largeImage} />
//           </Modal>
          
//         )}
//       </>
//     );
//   }
// }
