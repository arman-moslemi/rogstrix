import CreateRequest from '../components/features/CreateRequest/CreateRequest';
import React from 'react';
import { useStateValue } from '../utils/StateProvider';

const Links = () => {
	const [{ user }, dispatch] = useStateValue();
	
	return sidebarLinks;
};

export default Links;
