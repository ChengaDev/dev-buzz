import fs from 'fs';
import path from 'path';

const getPackages = async () => {
	const packages = JSON.parse(fs.readFileSync(path.join('packages/packages.json'), 'utf-8'));

	return {
		props: {
			packages
		}
	};
};

export default {
	getPackages
};
