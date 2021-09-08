import { CardActions, Typography,Card,CardMedia,IconButton,CardContent } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {ShoppingCart} from '@material-ui/icons'
const useStyles =  makeStyles(()=>({
    root: {
        // maxWidth: 345, original width style
        maxWidth: '345px',
        maxHeight:'345px',
       
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        width:'100%'
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
}))

export const Product = ({product})=>{
    const classes=useStyles();
    return(
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}> 
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        {product.price.formatted}
                    </Typography>
                </div>
                <Typography  variant='body2' color='textSecondary'>{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label='Add to Cart'>
                    <ShoppingCart/>
                </IconButton>
            </CardActions>
        </Card>
    )
}