import logo from '../assets/logo2.svg';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
  const cartProducts = useSelector((store) => store.cart);
  let cartItems = 0;
  cartProducts.map((item) => {
    cartItems += item.qty;
  });

  const style = {
    width: '40rem',
    marginTop: '1rem',
  };
  return (
    <div
      style={{
        background: '#f1f5f8',
        width: '100%',
        height: '5rem',
        boxShadow: '2px 0 2px rgba(0, 0, 0, 0.2)',
        position: 'fixed',
        zIndex: '2',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <img
        src={logo}
        alt="no"
        style={{
          height: '5rem',
          width: '8rem',
        }}
      />
      <TextField
        style={style}
        id="outlined-textarea"
        placeholder="Searching for..."
        multiline
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                style={{
                  fontSize: '20px',
                }}
              />
            </InputAdornment>
          ),
        }}
      />
      <Link to="/Cart">
        <div
          style={{
            borderRadius: '50%',
            height: '3rem',
            width: '3rem',
            marginRight: '2rem',
            background: '#F5F5F5 ',
            alignContent: 'center',
            position: 'relative',
            marginTop: '1rem',
            cursor: 'pointer',
          }}
        >
          <p>{cartItems}</p>
          <ShoppingCartIcon
            color="disabled"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              fontSize: '2rem',
              transform: 'translate(-50%,-50%)',
            }}
          ></ShoppingCartIcon>
        </div>
      </Link>
      <Outlet />
    </div>
  );
}
export default Navbar;
