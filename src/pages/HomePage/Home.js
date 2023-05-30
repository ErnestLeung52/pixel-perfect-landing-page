import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from './Data';

const Home = () => {
	return (
		<>
			<InfoSection {...homeObjOne} />
			<Pricing />
			<InfoSection {...homeObjThree} />
			<InfoSection {...homeObjTwo} />
			<InfoSection {...homeObjFour} />
		</>
	);
};

export default Home;
