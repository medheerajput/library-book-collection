// src/components/Toast.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = {
  success: (message) => {
    toast.success(message, {
      position: "bottom-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeButton: false,
      className: 'toast-success'
    });
  },
  error: (message) => {
    toast.error(message, {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeButton: false,
      className: 'toast-error'
    });
  }
};

export default Toast;
