import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearState } from '../features/cart';
function Checkout() {
  const cartProducts = useSelector((store) => store.cart);
  const nav = useNavigate();
  let Amount = 0;
  const dispatch = useDispatch();
  cartProducts.map((item) => {
    Amount += Math.floor(item.qty * item.price);
  });

  const proceed = () => {
    alert('Order Confirmed');
    dispatch(clearState());
    nav('/');
  };
  return (
    <>
      <div
        style={{
          marginLeft: '34rem',
          width: '30rem',
          position: 'relative',
          marginBottom: '4rem',
          marginTop: '2rem',
          background: '#F0F5F5',
          height: '35rem',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '4rem',
            marginTop: '2rem',
            paddingTop: '50px',
          }}
        >
          <h2>Checkout</h2>
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

        <form
          style={{
            marginLeft: '4rem',
          }}
          onSubmit={proceed}
        >
          <label
            for="CardNumber"
            style={{
              fontSize: '1rem',
              color: '#D3D9D9',
            }}
          >
            Card Number
          </label>
          <br></br>
          <input
            type="number"
            style={{
              height: '2.8rem',
              width: '70%',
              marginBottom: '2rem',
              borderRadius: '10px',
              border: '1px solid #D1D9DA',
            }}
            required
            class="form-control"
          ></input>

          <label
            for="Expiry"
            style={{
              fontSize: '1rem',
              color: '#D3D9D9',
            }}
          >
            Expiry Date
          </label>
          <br></br>
          <input
            type="date"
            style={{
              height: '2.3rem',
              width: '50%',
              marginBottom: '2rem',
              borderRadius: '10px',
              border: '1px solid #D1D9DA',
            }}
            class="form-control"
            required
          ></input>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '60%',
            }}
          >
            <div>
              <label
                for="CVC"
                style={{
                  fontSize: '1rem',
                  color: '#D3D9D9',
                }}
              >
                CVC
              </label>
              <br></br>
              <input
                type="password"
                style={{
                  height: '2.3rem',
                  width: '120px',
                  borderRadius: '10px',
                  border: '1px solid #D1D9DA',
                }}
                class="form-control"
                required
              ></input>
            </div>
            <div>
              <label
                for="ZIP"
                style={{
                  fontSize: '1rem',
                  color: '#D3D9D9',
                }}
              >
                ZIP Code
              </label>
              <br></br>
              <input
                type="number"
                style={{
                  height: '2.3rem',
                  width: '120px',
                  borderRadius: '10px',
                  border: '1px solid #D1D9DA',
                }}
                class="form-control"
                required
              ></input>
            </div>
          </div>
          <button
            type="submit"
            class="btn"
            style={{
              width: '30rem',
              height: '3rem',
              fontSize: '1.5rem',
              marginTop: '5rem',
              position: 'absolute',
              left: '0px',
              bottom: '0px',
            }}
          >
            Pay {Amount}$
          </button>
        </form>
      </div>
    </>
  );
}
export default Checkout;
