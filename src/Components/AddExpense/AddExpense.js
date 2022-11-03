import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/Styles";
import { TextField } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./AddExpense.css";

const useStyles = makeStyles(() => ({
  btn: {
    backgroundColor: "#0277BD",
    width: "100%",
    color: "white",
    "&:hover": {
      backgroundColor: "#01579b",
      color: "white",
    },
  },
}));

export default function AddExpense() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAnchor = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className={classes.btn}
      >
        +Expense
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" className="modal_nav nav__text">
          Add Expense
        </DialogTitle>
        <DialogContent style={{ width: "400px", height: "300px" }}>
          <DialogContentText>
            <div className="content_text">
              <div>
                <TextField
                  autoFocus
                  id="name"
                  label="Paid By:"
                  type="email"
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  autoFocus
                  id="name"
                  label="Split Between:"
                  type="email"
                  fullWidth
                />
              </div>
              <div>
                <TextField
                  autoFocus
                  id="name"
                  label="Description:"
                  type="text"
                  fullWidth
                />
              </div>
            <div>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
              >
                open lables
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleCloseAnchor}
              >
                <MenuItem onClick={handleCloseAnchor}>Profile</MenuItem>
                <MenuItem onClick={handleCloseAnchor}>My account</MenuItem>
                <MenuItem onClick={handleCloseAnchor}>Logout</MenuItem>
              </Menu>
            </div>
            </div>
           </DialogContentText>
        </DialogContent>
        <DialogActions className="modal_nav">
          <Button onClick={handleClose} color="secondary" variant="contained">
            Cancel
          </Button>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
