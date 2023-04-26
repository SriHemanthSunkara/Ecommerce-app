import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch } from 'react-redux';
import { decrementItem, incrementItem } from '../features/cart';
import { Outlet, Link } from 'react-router-dom';

function Cart() {
  const cartProducts = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  let Amount = 0;

  cartProducts.map((item) => {
    Amount += Math.floor(item.qty * item.price);
  });

  return (
    <>
      <div
        style={{
          textAlign: 'center',
          marginBottom: '2rem',
          marginTop: '2rem',
        }}
      >
        <h2>Your Cart</h2>
        <div
          style={{
            width: '5rem',
            height: '0.25rem',
            background: '#c59d5f',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        ></div>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridColumnGap: '0rem',
          gridRowGap: '2rem',
          marginLeft: '7rem',
          marginTop: '2rem',
        }}
      >
        {cartProducts.map((product) => {
          return (
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    P
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings" className="para">
                    <Typography paragraph></Typography>
                    <MoreVertIcon />
                  </IconButton>
                }
                subheader="September 14, 2023"
              />
              <CardMedia
                component="img"
                height="194"
                image={product.image}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {product.title}
                </Typography>
                <br></br>

                <Typography paragraph>Price: {product.price} $</Typography>
                <Typography paragraph>
                  Quantity:{' '}
                  <button
                    class="btn"
                    style={{
                      width: '1.5rem',
                      fontSize: '1rem',
                      padding: '0',
                      alignContent: 'center',
                    }}
                    onClick={() => {
                      dispatch(incrementItem(product));
                    }}
                  >
                    +
                  </button>{' '}
                  {product.qty}{' '}
                  <button
                    class="btn"
                    style={{
                      width: '1.5rem',
                      fontSize: '1rem',
                      padding: '0',
                      alignContent: 'center',
                    }}
                    onClick={() => {
                      dispatch(decrementItem(product));
                    }}
                  >
                    -
                  </button>
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div
        style={{
          marginLeft: '7rem',
          marginTop: '2rem',
        }}
      >
        <p
          style={{
            fontSize: '3rem',
          }}
        >
          Total Amount: {Amount} $
        </p>
        <div
          class="tour-btn"
          style={{
            fontSize: '3rem',
          }}
        >
          <Link to="/Checkout">
            <button class="btn">Place Order</button>
          </Link>
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Cart;
