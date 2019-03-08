import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../ThemeContext';

import styles from './ArtistTable.module.scss';
import { prepareComponent } from './helpers';
import TableItem from './TableItem/TableItem';

class ArtistTable extends React.Component {

	// - By default for now, assume there's no table head and footer.
	//   In the context of this application, they are provided by the outer
	//   container, ArtistProfileDisplay.
	state = {
		hasHeader: false,
		hasFooter: false
	}

	render() {

		const initObject = prepareComponent(this.context, this.props, this.state, styles);

		return (
			<table className={ initObject.artistTableClasses }>
				
			</table>			
		);
	}
}

ArtistTable.contextType = ThemeContext;

export default ArtistTable;
