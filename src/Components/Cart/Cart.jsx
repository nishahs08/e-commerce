
import {Typography,Button,Grid, Container} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {CartItem} from './CartItem';
const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '150px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
}));
export const Cart =({cart,onUpdateCartQty,onRemoveFromCart,onEmptyCart})=> {
    const classes=useStyles();
    const handleEmpty =()=>onEmptyCart();

    // const isEmpty = cart.line_items.length === 0 ;

    if (!cart.line_items) return 'Loading';
    
    const renderEmptyCart = ()=>{
        <Typography variant="subtitle1"> Yo have no items in your cart , start adding some !
        <Link className={classes.link} to='/'>start adding some</Link>
        </Typography>
    }
    const renderCart=()=>(
        <>
        <Grid container spacing={3}>
          {cart.line_items.map((lineItem) => (
            <Grid item xs={12} sm={4} key={lineItem.id}>
              <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
            </Grid>
          ))}
        </Grid>
        <div className={classes.cardDetails}>
          <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
          <div>
            <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={onEmptyCart} >Empty cart</Button>
            <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Checkout</Button>
          </div>
        </div>
      </>
    )
    return(
        <Container>
            <div className={classes.toolbar}>
                <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
             {!cart.line_items.length ? renderEmptyCart() : renderCart()}
            </div>
        </Container>
    )
}

