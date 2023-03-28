import reactDom from 'react-dom';

const ModalPortal = ({ children }) => {
  const $ModalPortal = document.getElementById('modal-root');
  return reactDom.createPortal(children, $ModalPortal);
};

export default ModalPortal;
