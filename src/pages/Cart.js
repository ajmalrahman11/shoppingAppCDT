import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearCart } from '../features/counter/counterSlice';

const Cart = () => {
	const cartItems = useSelector(state => state.counter.cartItems);
	const dispatch = useDispatch();

	return (
		<div style={{ height: '100vh' }}>
			<div
				style={{
					border: '1px solid grey',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '60px',
				}}
			>
				Cart Items
			</div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
				}}
			>
				{cartItems.map(item => {
					return (
						<div
							style={{
								border: '3px solid orange',
								margin: '10px 300px',
								borderRadius: '10px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								flexDirection: 'column',
							}}
						>
							<div>
								Name:
								<span style={{ color: 'dodgerblue' }}>
									{item.pname}
								</span>
							</div>
							<div>
								Price:
								<span style={{ color: 'orange' }}>
									{item.pprice}
								</span>
							</div>
						</div>
					);
				})}
				<button
					style={{ margin: '10px 100px', color: 'red' }}
					onClick={() => {
						dispatch(clearCart());
					}}
				>
					Clear Cart Items
				</button>
			</div>
		</div>
	);
};

export default Cart;
