import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import dp from "../../assets/J.png";
import navLogo from "../../assets/logo.svg";

interface IProps {
  user: {
    name: string;
  };
  onOpen: () => void;
  onClose: () => void;
  open: boolean;
}
const Nav: React.FC<IProps> = (props) => {
  const theme = useTheme();
  return (
    <Box
      bgcolor="white"
      color="black "
      py={2}
      boxShadow="0 0 5px 1px   rgba(0,0,0, 0.3)"
    >
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={2} textAlign="center">
          <img src={navLogo} alt="logo" />
        </Grid>
        <Grid item xs={2}>
          <Stack
            gap={3}
            px={3}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              variant="body1"
              fontWeight={900}
              component="b"
              color={theme.palette.info.main}
            >
              {props.user.name}
            </Typography>
            <Avatar
              alt="Remy Sharp"
              src={dp}
              onClick={props.onOpen}
              sx={{ cursor: "pointer" }}
            />
            {/* DIALOG */}

            <Dialog
              open={props.open}
              onClose={props.onClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                <Typography variant="body2" fontWeight={900}>
                  Are you sure you want to LOGOUT ?
                </Typography>
              </DialogTitle>

              <DialogActions>
                <Button onClick={props.onClose}>Cancel</Button>
                <Button
                  onClick={props.onClose}
                  variant="text"
                  // color={theme.palette.primary.dark}
                  autoFocus
                >
                  Yes
                </Button>
              </DialogActions>
            </Dialog>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Nav;
