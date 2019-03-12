import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../ThemeContext';

import styles from './TableItem.module.scss';
import { prepareComponent, prepareLinkGallery } from './helpers';
import SocialMediaIconComponents from '../../../../Helpers/socialMediaIconComponents';

import ProfileImage from '../../../ImageContainers/ProfileImage/ProfileImage';
import CircleButton from '../../../Buttons/CircleButton/CircleButton';

class TableItem extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);
		const artistSocialLinks = prepareLinkGallery(this.props, SocialMediaIconComponents);

		return (
			<tr className={ initObject.tableItemClasses }>
				<td className={ initObject.profileImageClasses }>
					<div className={ initObject.imageCradleClasses }>
						<ProfileImage
							imagePath={ this.props.imageURL }
							name={ this.props.name }
						/>
					</div>
				</td>
				<td className={ initObject.titleClasses }>
					<p>{ this.props.name }</p>
				</td>
				<td className={ initObject.socialLinksClasses }>
{/*					{
						artistSocialLinks.map((LinkInfo,index) => (
							<a 
								key={ index }
								href={ LinkInfo.link } 
								target='_blank'
								rel='noopener noreferrer' 
							>											
								<CircleButton
									key={ index }
									size='30px'
									darkTheme={ LinkInfo.icons['darkTheme']() }
									lightTheme={ LinkInfo.icons['lightTheme']() }
									highlighted={ LinkInfo.icons['highlighted']() }
									onClick={ () => {} }
								/>
							</a>													
						))						
					}*/}
				</td>
			</tr>
		);
	}
}

TableItem.contextType = ThemeContext;

export default TableItem;
