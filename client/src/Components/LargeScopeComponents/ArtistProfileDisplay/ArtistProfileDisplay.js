import React from 'react';
import { ThemeContext } from '../../../ThemeContext';

import TopBar from './TopBar/TopBar';
import TwoSizeCardGallery from '../../Galleries/TwoSizeCardGallery/TwoSizeCardGallery';
import TwoSizeCard from '../../Cards/TwoSizeCard/TwoSizeCard';
import ArtistTable from '../../Tables/ArtistTable/ArtistTable';

import styles from './ArtistProfileDisplay.module.scss';
import { prepareComponent } from './helpers';

class ArtistProfileDisplay extends React.Component {
		
	state = {
		displayMode: this.props.displayMode,
	};

	switchViewMode = (displayMode) => {
		this.setState({displayMode});
	}

	resolveDisplayMode = () => {
		if (this.state.displayMode === 'gallery') {
			return (
				<TwoSizeCardGallery> 
          {
            this.props.artists.map((artist, index) => (
              <TwoSizeCard
                key={ index }
                shape='round'
                title={ artist.title }
                imagePath={ artist.imagePath }
                socialURLs={ artist.socialURLs }
              />
            ))
          }					
				</TwoSizeCardGallery>
			);
		}
		else if (this.state.displayMode === 'list') {
			return (
				<ArtistTable
					// - This itself will eventually be props mapped in from the connect redux function. 
					artists={ this.props.artists }
				/>
			);
		}
	};

	render() {
		const initObject = prepareComponent(this.context, this.props, styles, this.state);

		return (
			<div className={ initObject.artistProfileDisplayClasses }>
				<TopBar 
					onSortClick={ this.props.onSortClick }
					onSwitchViewModeClick={ this.switchViewMode }
				/>
				{/* Method below renders out gallery or list, based on mapped state props */}
				{ this.resolveDisplayMode() }

			</div>
		);
	}
}

ArtistProfileDisplay.contextType = ThemeContext;

export default ArtistProfileDisplay;
