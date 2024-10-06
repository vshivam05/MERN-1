import { useSnackbar } from "notistack";
import { useState } from "react";
import { Button } from "@mui/material";

const Register = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleClick = (e) => {
    enqueueSnackbar("Message", { variant: e.target.name });
  };

  const handleClose = (e) => {
    closeSnackbar();
  };
  return (
    <div>
      <div>
        <Button
          type="button"
          name="success"
          variant="outlined"
          onClick={(e) => handleClick(e)}
        >
          Show Success
        </Button>
        <Button
          type="button"
          name="warning"
          variant="outlined"
          onClick={(e) => handleClick(e)}
        >
          Show Warning
        </Button>
        <Button
          type="button"
          name="error"
          variant="outlined"
          onClick={(e) => handleClick(e)}
        >
          Show Error
        </Button>
      </div>
      <div>
        <Button type="button" variant="contained" onClick={handleClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Register;
