import { Grid ,Toolbar} from "@material-ui/core";
import {Product} from './Product/Product'
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { Loading } from "./Product/Loading";
// const products = [
//   { id: 1, name: "Shoes", descripion: "Running shoes",price:'$5', },
//   { id: 2, name: "Maccbook", description: "Apple macbook" ,price:'$5' },
// ];

const useStyles=  makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),

   
  },
  root: {
    flexGrow: 1,
  },
}));

export const Products = ({products,onAddToCart}) => {
  const classes=useStyles();
  return (
    <main className={classes.content}>
      
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4} >
        {products.length === 0 ? 
        new Array(6).fill(0).map((k,i) => (  <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
         <Loading/>
          </Grid>))
        :
        products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))
        }
      </Grid>
 
    </main>

    
  );
};

