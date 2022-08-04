import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 300px;
	overflow: hidden;
`;

const Wrapper = styled.div`
	width: 100%;
`;

const Slider = () => {
	return (
		<Container>
			<Wrapper style={{ justifyContent: 'center' }}>
				<img
					src="https://storiesflistgv2.blob.core.windows.net/stories/2017/09/mehengaai_mainbanner.jpg"
					alt=""
					style={{
						width: '100%',
						height: '300px',
						justifyContent: 'center',
						margin: 'auto',
					}}
				/>
			</Wrapper>
		</Container>
	);
};

export default Slider;
