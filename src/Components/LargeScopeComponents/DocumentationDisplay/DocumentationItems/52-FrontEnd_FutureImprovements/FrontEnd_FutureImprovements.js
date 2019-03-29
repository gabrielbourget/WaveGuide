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

class ApplicationOverview extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>

					<h1>Future Improvements</h1>

					<p>
						<TextIndent>Building</TextIndent> a modest UI library has felt like falling down a rabbithole in some senses. As I've composed 
						my way up to larger and larger components, I have started to see more concretely how I would implement all manner of other UI components.
						With this expanding vision though also comes a deeper understanding of the time and consideration that must go into these other components. 
						As a matter of balance and scope for this portfolio project, I developed the library to the point where I could fulfill the basic requirements 
						that I wanted it to meet. Below are some of the structural changes to the application's front end that I am considering along with some of the 
						other major components I am in the process of thinking through and implementing.
					</p>

					<h2>Moving Away From the Context API</h2>

					<p>
						<TextIndent>I</TextIndent> found that learning about and implementing a practical use of React's Context API to be an enriching learning experience. 
						I like the way that it makes theme information globally available to any components nested within its structure that subscribe to it in their source 
						code. However, given that I have implemented a Redux architecture for my state management, it feels like a lateral move at best to be continuing to 
						maintain my color themeing with the Context API. 
					</p>

					<p>
						<TextIndent>It</TextIndent> would be a fairly tedious but simple code refactoring to go into my components and have them base their theme decisions on 
						the theme value that I already storing in state, in parallel to the way that I am storing it in context. That way, I could reduce the amount of boiler 
						plate that went into creating new components. I could then rely on one less tool in order to build the application, reducing the cognitive load required for other 
						people to learn about and collaborate on the codebase. 
					</p>

					<h2>Future UI Components</h2>

					<p>
						<TextIndent>Below</TextIndent> is a non-exhaustive list of some of the other UI components that I either actively developing, in the process of designing, or 
						still just mulling around in my head. Many would be directly tied to opening up further user functionality within the musical community directory that I've built 
						and want to continue growing. 
					</p>

					<h3>Full Page Modal</h3>

					<p>
						<TextIndent>I</TextIndent> would like to build a full page modal component that could fulfill various roles within the application. One use context that I can envision 
						for it are containing a settings dashboard for users to customize the way they interact with the application and its visual presentation. Another is to implement a full 
						screen photo/content carousel in the same style that Facebook does for photos on their platform's desktop application. Additionally, I could see this kind of modal forming 
						a visual foundation within which I could build a more involved profile for artists that included information such as a biography, an audio player with some of their key 
						songs, and a map component displaying future show dates as location markers on it.
					</p>

					<h3>Audio Player</h3>

					<p>
						<TextIndent>Having</TextIndent> spent a lot of time in digital audio workstations such as Ableton, and on streaming platforms such as Soundcloud as I have moved through 
						learning sound design, music production, and audio engineering, I have become really intrigued by the idea of building an audio player component of my own. If I could 
						write a procedure that could sample the amplitude of an audio file a certain number of times per second, the results of this process could form the basis needed 
						to form a visual representation of the file's waveform. 
					</p>

					<p>
						<TextIndent>Having</TextIndent> looked into visualization libraries such as ChartJS and D3, my thought process so far is that this data model could feed in to create a waveform 
						representation that, within the context of a properly built React component, could provide interactions such as scrubbing through the file, buffering to a certain location within it, 
						attaching notes and audio/video annotations to certain parts as a way of providing feedback in collaborative environments etc... I am also interested in seeing if I could base the 
						functionality around the HTML5 <code>audio</code> component. I have had the chance to use it in some basic Javascript tutorials, and integrating it into a React component would be a 
						matter of negotiating what kind of internal state would be ok for the <code>audio</code> tag to manage, and what would have to be re-implemented as state that the overall component 
						would keep track of to stay in accordance with React's principles and guidelines. 
					</p>

					<h3>Embeds</h3>

					<p>
						<TextIndent>Many</TextIndent> streaming services such as Soundcloud, Spotify, and Apple Music provide easy to use encapsulations of their audio players, embedabble within 
						other websites to allow application users to listen to full songs or previews of songs outside the bounds of the platforms themselves. In the future, I would like to be 
						able to include some of these songs in full artist profiles, allowing site users the ability to preview some of an artist's most popular tracks as they browse through the 
						directory. This <code>Embed</code> component, or a series of variations on it would wrap this embed markup provided by the streaming services and negotiate weaving them 
						into the informational and visual flow of my application.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/22e9e820-5b9c-4688-8f31-7b44a3afe6bd'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/9cb887d0-a6d6-4a68-985b-0d0fb4a6836b'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>
					
				</article>
			</FromTheTopCradle>
		);
	}
}

ApplicationOverview.contextType = ThemeContext;

export default ApplicationOverview;
