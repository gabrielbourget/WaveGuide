import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../ThemeContext';

import styles from './TableItem.module.scss';
import { prepareComponent } from './helpers';

import ProfileImage from '../../../ImageContainers/ProfileImage/ProfileImage';

class TableItem extends React.Component {
	render() {

		const initObject = prepareComponent(this.context,this.props, styles);

		return (
			<tr className={ initObject.tableItemClasses }>
				<td className={ initObject.profileImageClasses }>
					<div className={ initObject.imageCradleClasses }>
						<ProfileImage
							src={ this.props.artist.imagePath }
							alt={ this.props.artist.title }
						/>
					</div>
				</td>
				<td className={ initObject.titleClasses }>
					
				</td>
				<td className={ initObject.socialLinksClasses }>
					
				</td>
			</tr>
		);
	}
}

TableItem.contextType = ThemeContext;

export default TableItem;
