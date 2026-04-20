import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import type {SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

interface ToastProps {
  setToastOpen:React.Dispatch<React.SetStateAction<boolean>>;
  toastOpen:boolean;
  message:string;
}

export default function Toast({toastOpen,setToastOpen,message}:ToastProps) {

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setToastOpen(false);
  };

  return (
    <div>
      <Snackbar open={toastOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}        </Alert>
      </Snackbar>
    </div>
  );
}
