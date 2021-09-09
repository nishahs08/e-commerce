import Skeleton from "@material-ui/lab/Skeleton";

import {
  CardActions,
  Typography,
  Card,
  CardMedia,
  IconButton,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ShoppingCart } from "@material-ui/icons";
import { AddShoppingCart } from "@material-ui/icons";
const useStyles = makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: "345px",
    maxHeight: "380px",
    margin:'15px'
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    width: "100%",
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export const Loading = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Skeleton variant="rect" width="100%" height="230px" />
      <CardContent>
        <div className={classes.cardContent}>
          <Skeleton variant="text" width="100%" height={40} />
        </div>
        <Skeleton variant="text" width="100%" height={20} />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <Skeleton variant="circle" width={40} height={40} />
      </CardActions>
    </Card>
  );
};
