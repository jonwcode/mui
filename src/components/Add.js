import {
  Fab,
  Tooltip,
  Box,
  Modal,
  styled,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import { Add as AddIcon, DateRange } from "@mui/icons-material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import ImageIcon from "@mui/icons-material/Image";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import React, { useState } from "react";

const Add = () => {
  const [open, setOpen] = useState(false);

  const StyledModel = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });

  return (
    <React.Fragment>
      <Box
        sx={{
          position: "fixed",
          bottom: 30,
          left: { xs: "50%", md: 30 },
          transform: { xs: "translateX(-50%)", md: "translateX(0)" },
        }}
      >
        <Tooltip title="delete" onClick={(e) => setOpen(true)}>
          <Fab color="primay">
            <AddIcon />
          </Fab>
        </Tooltip>
        <StyledModel
          open={open}
          onClose={(e) => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            width={400}
            height={280}
            borderRadius={2}
            bgcolor={"background.default"}
            color={"text.primary"}
            p={3}
          >
            <Typography variant="h6" textAlign="center" color="gray">
              Create post
            </Typography>
            <UserBox>
              <Avatar
                src="https://randomuser.me/api/portraits/thumb/men/27.jpg"
                sx={{ width: 30, height: 30 }}
              />
              <Typography fontWeight={500} variant="span">
                John Doe
              </Typography>
            </UserBox>
            <TextField
              placeholder="Whats on your mind?"
              sx={{ width: "100%" }}
              multiline
              rows={4}
              variant="standard"
            />
            <Stack direction="row" gap={1} mb={2} mt={2}>
              <EmojiEmotionsIcon color="primay" />
              <VideoCameraBackIcon color="secondary" />
              <ImageIcon color="success" />
              <PersonAddIcon color="error" />
            </Stack>
            <ButtonGroup fullWidth variant="contained">
              <Button>Post</Button>
              <Button sx={{ width: "100px" }}>
                <DateRange />
              </Button>
            </ButtonGroup>
          </Box>
        </StyledModel>
      </Box>
    </React.Fragment>
  );
};

export default Add;
