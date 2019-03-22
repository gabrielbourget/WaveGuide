import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../../../ThemeContext';

import styles from '../../DocumentationItem/DocumentationItem.module.scss';
import { prepareComponent } from '../../DocumentationItem/helpers';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../../../Buttons/FilledButton/FilledButton';

class ApplicationScope extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Application Scope</h1>

					<p>
						<TextIndent direction='leftToRight'>Part</TextIndent> of this learning process has also been developing the ability to more accurately
						scope the amount of code, design, thought, and time that is required to build different types of user interface components and implement 
						different design patterns. With that growing perspective, I was able to identify features that, while I wanted to take the time to develop,
						would not fit within the timeline of learning these technologies and applying for software dev positions. Some of these features include 
						a more fully featured profile page for artists, profiles for other members of the community who contribute but do not necessarily make music,
						and a content feed containing recent musical releases in the community, upcoming events, contests that are running etc...
					</p>					

					<h2>Full Page Artist Profile</h2>

					<p>
						<TextIndent direction='leftToRight'>As</TextIndent> a minimum viable community directory, I wanted to make sure that this portfolio project
						allowed site users to search through a decently sized directory of artists, and be able to access the different jump-off points to their 
						profiles on many of the other popular social networks and streaming services they are on. For now, that information is available in a gallery 
						small profile cards and a table view, with the ability to search through the directory by art project title, and sort them alphabetically/reverse 
						alphabetically. 
					</p>

					<p>
						<TextIndent direction='leftToRight'>As</TextIndent> my abilities grow, and I am able to think through designing it in a modular and reusable way, 
						I'd like to build a more fully featured profile for artists, which could be expressed on a large modal or as a full page component. I would then 
						have the space to include items such as:
				
						<ul style={ {paddingLeft: '20px'} }>
							<li>
								<p>Their biography, pulled down from somewhere like soundcloud, instagram, or spotify</p>
							</li>
							<li>
								<p>Some of the labels and collectives they've released music with</p>
							</li>
							<li>
								<p>The labels and collectives they've released music with</p>
							</li>
							<li>
								<p>A list of their upcoming shows and appearances</p>
							</li>
							<li>
								<p>Soundcloud embeds of some of their most popular songs</p>
							</li>
						</ul>
					</p>

					<h2>Secondary Profile Types</h2> 

					<p>
						<TextIndent direction='leftToRight'>While</TextIndent> it is a great jump-off point to be providing information on the different artists throughout
						the wave scene, the reality is that there are many other incredible people who contribute to the community who do not themselves make music or who 
						also fulfill additional roles. These include, but are not limited to, sound designers, sound engineers, graphic and motion designers, promoters, 
						managers, the moderators of our online forums, videographers, and photograpers. 
					</p>

					<p>
						<TextIndent direction='leftToRight'>I</TextIndent> am currently exploring some different options regarding how to build UI components that can frame
						nice profiles for them as well, so that everyone can be more fully connected to eachother, and we can collectively propel the art forward. What I will 
						most likely do is prototype some different sized profile UI components that present information for these different types of roles. As I notice the 
						markup, styles, and logic that I tend to be repeating across these different prototypes, my plan is to adopt a gradual process of refactoring, abstracting 
						them into their own components, stylesheets, and helper files.
					</p>

					<h2>Content Feed</h2>

					<p>
						<TextIndent direction='leftToRight'>As</TextIndent> the wave music community has grown in scale and capacity, the frequency with which new music is 
						being released, events are being announced, and new projects are being launched has steadily increased. While it is still reasonably possible to keep 
						track of these events, it requires one to be monitoring the different streaming platforms, subreddits, facebook groups, discord servers etc... that these 
						events are happening in. 
					</p>

					<p>
						<TextIndent direction='leftToRight'>What</TextIndent> I am planning to do, is to follow 

						<a
							href="https://blog.lftechnology.com/what-i-learned-from-building-my-own-virtualized-list-library-for-react-caf9beca2beb"
							target='_blank'
							rel='noopener noreferrer'
						>
							&nbsp; this tutorial &nbsp;
						</a>

					  as the design origin for a scalable feed component that will be implemented as a virtualized list. On the UI side, I could design containers that could 
						template different types of posts, such as musical releases, links to blog posts and forum discussions, upcoming events etc... At first, I would most
						likely fill this news feed manually with test items in order to make sure everything worked well and looked good from a presentational and interactive 
						stand point. Eventually though, on the API side, I could try to find ways to create subscriptions to different services like spotify and facebook to 
						pull information about these posts and releases in real time, and reflect them within the news feed. 
					</p>

					<p>
						<TextIndent direction='leftToRight'>I</TextIndent> could represent the overall feed as an array of Objects stored in the overall redux state tree, 
						populate it through async actions to API endpoints. Implemented as a virtualized list, the component would only mount the items that will fit into 
						the viewport at a time, plus some buffer amount up and down in order to allow for smooth loading as the application user moves up and down. 
					</p>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/71987a6a-61c1-4c2e-8ad6-af16714c583f'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/73627e59-49df-47a8-a0d7-22edd04a7c0c'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>
										
				</article>
			</FromTheTopCradle>
		);
	}
}

ApplicationScope.contextType = ThemeContext;

export default ApplicationScope;
