import {
  Toolbar,
  Typography,
  AppBar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
} from "@material-ui/core";
import { makeStyles, alpha } from "@material-ui/core/styles";
import logo from "../../Asset/logo.png";
import { ShoppingCart } from "@material-ui/icons";
import { Link ,useLocation} from "react-router-dom";
const drawerWidth = 0;

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
  image: {
    marginRight: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const Navbar = ({ totalItems }) => {
  const classes = useStyles();
  const location=useLocation();
  
  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" component={Link} to='/'>
            <img src={logo} height="25px" className={classes.image} />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          {(location.pathname === '/') && 
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit" component={Link} to='/cart'>
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
}
        </Toolbar>
      </AppBar>
    </>
  );
};
