import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { useSelector } from 'react-redux';

const Container = styled.div`
	height: 60px;
`;

const Wrapper = styled.div`
	height: 60px;
	padding: 0 20px;
	display: flex;
	align-items: center;
	background-color: lightgrey;
	justify-content: space-between;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
`;

const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

const MenuItem = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin-left: 25px;
`;

const Navbar = () => {
	const cartItems = useSelector(state => state.counter.cartItems);
	let count = 0;
	count = cartItems.length;

	return (
		<Container>
			<Wrapper>
				<Left>
					<MenuItem>Home</MenuItem>
					<MenuItem>Shoes</MenuItem>
					<MenuItem>Backpack</MenuItem>
					<MenuItem>Contact</MenuItem>
				</Left>
				<Right>
					<Link to="/cart">
						<MenuItem>
							<Badge badgeContent={count} color="primary">
								<ShoppingCartOutlined />
							</Badge>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;
