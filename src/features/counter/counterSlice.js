import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
	singleItem: {
		pid: '',
		pname: '',
		image: '',
		pprice: 0,
		pquantity: 0,
	},
};

export const cartSlice = createSlice({
	name: 'Cart',
	initialState,
	reducers: {
		addToCart: state => {
			state.cartItems.push(state.singleItem);
		},
		setSingleItem: (state, action) => {
			state.singleItem.pid = action.payload.pid;
			state.singleItem.pname = action.payload.pname;
			state.singleItem.pprice = action.payload.pprice;
			state.singleItem.image = action.payload.pimage;
			state.singleItem.pquantity = action.payload.pquantity;
		},

		removeFromCart: (state, action) => {
			state.cartItems = state.cartItems.filter(
				item => item.pid !== action.payload
			);
		},
		clearCart: state => {
			state.cartItems = [];
		},
		changeQtyFromCart: (state, action) => {
			state.cartItems.filter(obj => {
				if (obj.pid === action.payload.pid) {
					if (action.payload.type === 'plus') {
						obj.pquantity += 1;
					}
					if (action.payload.type === 'minus') {
						if (obj.pquantity !== 1) {
							obj.pquantity -= 1;
						}
					}
				}
				return obj;
			});
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	addToCart,
	setSingleItem,
	changeQtyFromCart,
	removeFromCart,
	clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
