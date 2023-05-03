import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  CardContent,
  Typography,
  CardActions,
  Checkbox,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import { FavoriteBorder } from "@mui/icons-material";

export const Post = () => {
  return (
    <div>
      {" "}
      <Card>
        <CardHeader
          title="This is the card header"
          subheader="here you can put the date"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/16614145/pexels-photo-16614145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<FavoriteIcon />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};
