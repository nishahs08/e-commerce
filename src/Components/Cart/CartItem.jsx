import {Typography,Button,Card,Card,CardActions,CardMedia} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));


const CartItem=({Item})=>{
    const classes =useStyles();

    return(
        <Card>
            <CardMedia image={Item.media.source} alt={Item.name} className={classes.media}>
                <CardContent className={classes.CardContent}>
                    <Typography variant='h4'>{Item.name}</Typography>
                    <Typography variant='h5'>{Item.line_total.formatted_with_symbol}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    <div className={classes.buttons}>
                        <Button type="button" size="small">-</Button>
                        <Typography>{Item.quantity}</Typography>
                        <Button type="button" size="small">+</Button>
                    </div>
                    <Button varinat='contained' type='button' color='secondary'>Remove</Button>
                </CardActions>
            </CardMedia>
        </Card>
    )
}

export default CartItems;