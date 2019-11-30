import baseTheme from '@intergroupsite/gatsby-theme-intergroup-site/src/gatsby-plugin-theme-ui';
import merge from 'lodash.merge';

export default merge({}, baseTheme, {
	colors: {
		primary: '#e64242',
	},
})