import { CardActions, Typography,Card,CardMedia,IconButton,CardContent } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {ShoppingCart} from '@material-ui/icons';
import { AddShoppingCart } from '@material-ui/icons';
const useStyles= makeStyles(() => ({
    root: {
      maxWidth: '100%',
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  }));

export const Product = ({product,onAddToCart})=>{
    const classes=useStyles();
    return(
        <Card className={classes.root}>
        <CardMedia className={classes.media} image={product.media.source} title={product.name} />
        <CardContent>
          <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              ${product.price.formatted}
            </Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" />
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart" onClick={()=>onAddToCart(product.id,1)}>
            <AddShoppingCart />
          </IconButton>
        </CardActions>
      </Card>
    )
}