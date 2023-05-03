import { useDispatch, useSelector } from 'react-redux';
import { IMG_CDN_URL } from '../constants';
import { clearCart } from '../utils/cartSlice.';

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = (item) => {
    dispatch(clearCart(item));
  };
  
  return (
    <div className="container mx-auto p-32">
      <div className="flex mb-5">
        <h2 className="font-bold text-2xl mt-12">Cart Items</h2>
        {cartItems.length ? (
          <button
            onClick={() => handleClearCart()}
            className="bg-slate-800 text-white px-4 py-1 mt-12 ml-4 rounded-lg"
          >
            Clear Cart
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="grid grid-cols-4 gap-y-6 gap-x-4">
          {cartItems.map((menu) => {
            return (
              <div className="my-2 p-4" key={menu?.id}>
                <div className="mb-2">
                  <img src={IMG_CDN_URL + menu?.imageId} alt="" />
                </div>
                <div>
                  {menu?.name}
                </div>
                <div>
                  Rs: {menu?.price / 100}
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
};

export default Cart
