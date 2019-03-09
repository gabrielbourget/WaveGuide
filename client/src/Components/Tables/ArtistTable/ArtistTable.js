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

		const initObject = prepareComponent(this.context, this.props, styles, this.state);
		console.log(initObject);

		return (
			<table className={ initObject.artistTableClasses }>
				{
					this.state.hasHeader ?
					<thead className={ initObject.tableHeaderClasses }>
						{/* Put whatever header body stuff you want in here. */}
					</thead> :
					null
				}
				<tbody className={ initObject.tableBodyClasses }>
					{
						this.props.artists.map((artist,index) => (
							<TableItem key={ index } artist={ artist }/> // - DEV NOTE -> Will eventually need props, don't forget. 
						))
					}
				</tbody>
				{
					this.state.hasFooter ?
					<tfoot className={ initObject.tableFooterClasses }>
						{/* Put whatever footer body stuff you want in here. */}
					</tfoot> : 
					null
				}
			</table>			
		);
	}
}

ArtistTable.contextType = ThemeContext;

export default ArtistTable;
