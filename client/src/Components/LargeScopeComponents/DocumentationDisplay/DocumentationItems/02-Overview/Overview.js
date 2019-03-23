import React from 'react';
//import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../../../../ThemeContext';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../../../Buttons/FilledButton/FilledButton';
import HorizontalDivider from '../../../../Dividers/HorizontalDivider/HorizontalDivider';

import styles from '../../DocumentationItem/DocumentationItem.module.scss';
import { prepareComponent } from '../../DocumentationItem/helpers';

class Overview extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Overview</h1>
					<p>
						<TextIndent direction='leftToRight'>Over</TextIndent> the past seven or so years, the increasingly distributed and
						networked ways in which we experience community online within the major social networks of our time has collided with 
						the paradigm shift over to streaming platforms such as Spotify, Apple Music, and Soundcloud in a really interesting and
						special way. Across these social networks and streaming platforms, and drawing from diverse music scenes such as Trap, 
						Garage, Witch House, and Trance, a global community of artists and fans has formed around a set of loose tendencies adding 
						up to be known collectively as wave music. 
					</p>

					<p>
						<TextIndent direction='leftToRight'>As</TextIndent> both a 

						 <a 
						 	href='https://soundcloud.com/imjuststarstuff/contact' 
							target='_blank'
							rel='noopen noreferrer'
						 >
							&nbsp;creator of
						</a> 

						, and fan of this kind of music, I've built this application with the intention of serving that community, seeking for it to 
						act as a directory and hub for the artists and all others to use. It also doubles as a portoflio project in which I am seeking 
						to demonstrate a working understanding of many of the core technologies and design patterns that make up the modern web applications 
						of the day, with a focus on front end development. You can find more information on this artistic community in the
						 <Link to='/documentation/97df66de-33fb-48cd-9543-0c698821d5d8'> next section</Link>, and can learn more about the way that 
						I built the application in the rest of this technical documentation. The entire codebase is also available up on 

						<a
							href='https://github.com/gabrielbourget/waveguide'
							target='_blank'
							rel='noopen noreferrer'
						>
							&nbsp;Github
						</a>.
					</p>

					<h2>Learning Journey</h2>
					<p>
						<TextIndent direction='leftToRight'>Having</TextIndent> finished my computer science program at Algonquin College in 
						December of 2018, it was time to look towards what kind of jobs I might want to apply for, and the types of skills
						required for them. As I kept up with modern web development technologies through podcasts, blog posts, Youtube 
						channels I enjoyed, etc... I became increasingly enamored with technologies such as NodeJS, React, and Redux, which were
						allowing teams of developers to build beautiful, performant, full-stack web applications almost entirely with Javascript. 
						As I explored these technologies further, I was drawn to the development workflow centered around modular JS, using 
						tools such as the npm package manager and Webpack bundler. 
					</p>
						
					<p>	
						<TextIndent direction='leftToRight'>One</TextIndent> of the major pain points that I had experienced in 
						developing web applications so far had been the difficulty of maintaining modular and reusable code. Building them up 
						to that point within an MVC paradigm, I found that on the markup side, using templating syntaxes such as CSHTML, I was 
						replicating a lot of similar view code blocks for similar but nevertheless differentiated UI scenarios. On the styling side, 
						I had been somewhat successful in learning to modularize my CSS using SASS pre-processor syntax to nest markup within a parent 
						class selector for the overall view. However, from a project organization standpoint, all of the styles were stored 
						in a separate directory structure, creating significant cognitive load as I tried to coordinate it with corresponding 
						markup and JS. Looking to the Javascript in the web applications I had built in school, one thing that I found 
						limiting in terms of scalability was that it was all globally scoped to the overall application. Short of delving 
						into the (at the time) murky waters of ES5 modules, I was left with large and unwieldly files full of Javascript
						that tended to affect other similarly scoped variables and logic in unpredictable and frustrating ways. 
					</p>
	
					<p>
						<TextIndent direction='leftToRight'>These</TextIndent> experiences, along with many others along my learning journey led 
						me towards React. Building this project with that library as a foundation helped to address many of the difficulties that
						I mentioned above, and while challenging to learn, it has ultimately led to a great development experience. I was able to build
						small pieces of modular UI, composing components such as buttons and inputs at first into larger and larger ones, bootstrapping
						my way up to the keystone pieces of the application. Then, I was able to thread it together by learning and implementing strategies 
						in areas such as state management and routing. I am finding that the colocation of layout, styling, and logic into self-contained 
						sections of my project structure is allowing me to build a sustainable codebase that I feel can scale into the future. I'm also 
						enjoying how this type of application development is allowing me to stay in closer accordance to foundational software principles such as 
						polymorphic capability, modularity, minimizing component responsibility, and making sure not to repeat yourself too much. 
					</p>

					<p>
						<TextIndent direction='leftToRight'>I</TextIndent> am excited about all that I have been able to learn about modern web development
						over the past few months, and the project that I have been able to build. I am also aware of the long list of topics and UI components 
						that I have read about, have tutorials lined up to work through, or have yet to learn of. Software development is a vast field, and I
						am looking forward to the opportunity to join a great team of developers, learning my way through these topics in a group setting, and 
						contributing to great products and maintainable code. 
					</p>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/f161856e-5375-4a66-882f-85b122eb439d'><FilledButton text='&larr; Prev Page'/></Link>	
						<Link to='/documentation/97df66de-33fb-48cd-9543-0c698821d5d8'><FilledButton text='Next Page &rarr;'/></Link>	
					</div>	

					<HorizontalDivider/>

				</article>
			</FromTheTopCradle>
		);
	}
}

Overview.contextType = ThemeContext;

export default Overview;
