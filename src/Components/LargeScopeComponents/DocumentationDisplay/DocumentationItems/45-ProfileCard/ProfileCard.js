import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../../ThemeContext';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../../../Buttons/FilledButton/FilledButton';
import HorizontalDivider from '../../../../Dividers/HorizontalDivider/HorizontalDivider';

import styles from '../../DocumentationItem/DocumentationItem.module.scss';
import { prepareComponent } from '../../DocumentationItem/helpers';

class ProfileCard extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Profile Card</h1>

					<p>
						<TextIndent>Thinking</TextIndent> through the different ways that I might want to display artist information 
						in the application, some of the ideas that I came up with were a small profile card to be displayed in a gallery, 
						a table with artist information in each row, and a large modal or full page representation of the artist with richer 
						information and interactivity. As I scoped this to be a portfolio project, I ended up holding off on the large profile
						now, but had the chance to dig into developing both the card and table representations. 
					</p>

					<p>
						<TextIndent>The</TextIndent> profile card that I build in the end displays on its front face the artist name, along 
						with a profile picture. The user can then open the card up with a button in the top right to pop down a gallery of 
						social media icons acting as links that they can click through to access their other presences on the internet. You can 
						see this component in action by opening up the search bar in the top of the application and entering 'everyone' as your
						query, returning all of the artists stored in the directory.
					</p>

					<p>
						<TextIndent>I</TextIndent> would say that this was one of the more complicated components that I worked through building, 
						but I am happy with how it turned out. The cards are generated as part of a map over an array or artist information profiles 
						provided in real-time by the Redux store. Each one takes in for props the artist name, a file path to a profile image for them,
						and an object containing a list of social networks and streaming platforms they have a presence on, along with each corresponding 
						URL to their profiles.
					</p>

					<h2>Potential Refactoring</h2>

					<p>
						<TextIndent>One</TextIndent> factor regarding my component that could use some future refactoring is the fact that I ask for 
						specific features regarding an artist's information, up front as named props, in order for the card to function properly. 
						While this works for now, it would be awkward to maintain the component if I decided that I wanted to display other types of 
						information within the container. What I might do instead is to ask for just a prop that points to an object containing information 
						on an artist. Then, within the internal code of the component, I could extract the information that I am looking for and use 
						it appropriately to render the component. 
					</p>

					<p>
						<TextIndent>Another</TextIndent> area regarding this profile card that seems ripe for rethinking is the strategy that I employ to 
						expand the card up and down between its open and closed state. Right now, the profile cards depend on existing within the wider 
						context of the card gallery component that I set up, (which I discuss in the <Link to='/documentation/6061a33a-2168-4571-8aa7-cf516e0ef601'>next section</Link>).
						So, rather than having a specified height at which they exist when collapsed, and then that height being explicitly modified when they expand, I 
						simply state that they should span one row of the grid when closed, and then chagne to spanning two rows when they are open.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/c212d863-a83b-451f-a7a3-93c979ec3d0a'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/6061a33a-2168-4571-8aa7-cf516e0ef601'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>
															
				</article>
			</FromTheTopCradle>
		);
	}
}

ProfileCard.contextType = ThemeContext;

export default ProfileCard;
