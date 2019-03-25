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

class FutureImprovements extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>

					<h1>Future Improvements</h1>

					<p>
						<TextIndent>My</TextIndent> learning experience as I have prepared this portfolio project have left me with a long list of technologies, 
						systems, and ideas that I'd like to employ in my code. Here, I go into some of the large-picture improvements I'd like to make.
					</p>

					<h2>Documenting and Exporting My Components</h2>

					<p>
						<TextIndent>I</TextIndent> am happy so far with the component library that I have been able to achieve, but am realistic about the fact 
						that for the most part, their applicability to other projects would still be fairly limited. As part of a process of standardization, I 
						am looking into using systems such as <a href='https://storybook.js.org/' target='_blank' rel='noopener noreferrer'>Storybook</a> and 
						<a href='https://bit.dev/' target='_blank' rel='noopener noreferrer'> Bit</a> in order to better document what my components do, what they 
						look like, and how to use them. My goal is for them to be reusable by other developers in their own projects, or to collaborate further on 
						this application with other developers in the musical community it is built for. I believe that tools like this would make this process 
						easier and more enjoyable. Eventually, if the components were standardized and optimized to a good enough level, it could be interesting to 
						export some of them as an npm package as well.
					</p>

					<h2>Building For Responsiveness</h2>

					<p>
						<TextIndent>As</TextIndent> it stands, there are many components in my application that are fairly flexible to a variety of screen sizes. 
						However, many others suffer from layout issues as the screen size shrinks, and it's clear that there's some work to do before the application 
						can be effectively consumed in contexts other than desktop. In general, I enjoy developing for responsiveness within the React paradigm, because 
						each component can be responsible internally for flowing and reorganizing its contents appropriately as the viewport changes.
					</p>

					<h3>More responsive CSS</h3>

					<p>
						<TextIndent>One</TextIndent> place that I can see areas for improvements in responsiveness is in the CSS modules that make up my components. By 
						writing media queries that target different device types and sizes, I can create modifications in the CSS that are applied in these specific contexts. 
						One place I have employed this strategy so far is with the Footer, reflowing content as a column instead of a row below a viewport width of 500 pixels. 
					</p>

					<h3>Window Listeners Within Components</h3>

					<p>
						<TextIndent>Media</TextIndent> queries are profound and powerful tools that I am excited to keep learning about. However, there are situations where 
						simply reflowing the content that exists on the page won't quite cut it. For example, as the viewport reaches a small enough width, I don't think it's 
						feasible to keep the documentation button that's in the top right of the navbar visible on the page. By having the <code>Navbar</code> component keep 
						track of the window width, and report this information to its internal state, I could trigger a re-render below a certain width, which would exclude 
						this documentation button from the markup generated in the navbar.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/6a91f5a4-03e4-43e2-8fee-34e8a51fcdfc'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

FutureImprovements.contextType = ThemeContext;

export default FutureImprovements;
