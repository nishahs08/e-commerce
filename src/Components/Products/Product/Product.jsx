import { CardActions, Typography,Card,CardMedia,IconButton,CardContent } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles =  makeStyles(()=>({
    root:{
        maxWidth:'100%'
    },
    media:{
        height:0,
        padding:'56.27%'
    },
    cardActions:{
        display:'flex',
        justifyContent:'flex-end'
    },
    cardContent:{
        display:'flex',
        justifyContent:'space-between'
    }
}))

export const Product = ({product})=>{
    const classes=useStyles();
    return(
        <Card className={classes.root}>
            <CardMedia className={classes.media} image='' title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}> 
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        {product.price}
                    </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label='Add to Cart'>
                    {/* <AddShoppingCart/> */}
                </IconButton>
            </CardActions>
        </Card>
    )
}