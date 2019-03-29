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

class Server extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Express Server</h1>

					<p>
						<TextIndent>The</TextIndent> advent and expansion of NodeJS over the past decade has been exciting to me, as I have learnt more about back end 
						technologies. For the type of application I am in the process of building, where it will need to make numerous asynchronous I/O calls 
						over network resources, the single-threaded event loop that NodeJS implements seems like a good candidate as the basis for a back end system. 
						I have so far had the opportunity to follow tutorials such as 
						<a href="https://daveceddia.com/create-react-app-express-backend/" target='_blanks' rel='noopener noreferrer'> this one</a>, and
						<a href="https://www.youtube.com/watch?v=snjnJCZhXUM" target='_blank' rel='noopener noreferrer'> this one</a> in order to get an idea of how one 
						might go about connecting a react application to an Express server, and how one might then go about connecting that Express server to a 
						Neo4J database. While I am relatively comfortable with the concepts involved with setting up a system like this, I am aware of the nuance and 
						care that should go into the process in order to make it efficient, maintainable, and secure. My plan is to slowly implement the back end system, 
						taking the time to learn continue learning best practices involved, and layering them together until everything is hooked up and working well. 
					</p>

					<h2>Database Calls</h2>

					<p>
						<TextIndent>Neo4J</TextIndent> has implemented a set of drivers that can connect a Javascript server to a local or remote instance of one of their 
						databases, exposed as an npm package called <code>neo4j-driver</code>. In order to connect the front end to the database I have been implementing in 
						parallel, I will be employing this driver to open up a session between the server and the database, either kept open throughout a client's 
						session, or re-established for different types of requests. 
					</p>

					<p>
						<TextIndent>While</TextIndent> I have successfully been able to try out this kind of pipeline, making simple requests to my database to return to 
						me lists of artists, I realize that the queries I make to the database will need to be more complex and configurable, depending for example, on the 
						name of an artist that someone is searching for. As I learn more about this area of web development, I am thinking that I will abstract helper functions 
						imported by my server which could be called to help construct an appropriate query to the database dynamically, using information provided by the user 
						coming from the client. 
					</p>

					<h2>Static Asset Hosting</h2>

					<p>
						<TextIndent>The</TextIndent> types of static media that I am storing for now is only a relatively small list of profile images, used to fill in 
						the pictures for the artist profiles I construct in the card gallery and table view of the application. Kept in the <code>public</code> folder for 
						now, the setup serves the purpose of a small community directory. However, as the number of artists stored in the directory grows, and I look to 
						serving other media such as songs and podcasts generated within the community, it might be wise to look towards using some sort of CDN setup to serve 
						these files. Then, the appropriate links to this content on the CDN could be stored and linked into subclusters of the database centered around the 
						artist who the media represents.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/994199e8-5e34-4e9a-8ad7-ba84d1faa851'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/27d03266-f7a4-453f-8c4a-9f4f08584f09'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

Server.contextType = ThemeContext;

export default Server;
