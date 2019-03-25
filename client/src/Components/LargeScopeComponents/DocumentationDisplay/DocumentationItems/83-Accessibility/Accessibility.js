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

class Accessibility extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Accessibility</h1>

					<p>
						<TextIndent>Accessibility</TextIndent> within web applications is a fascinating topic, covering all manner of technological infrastructure 
						and creative workarounds meant to negotiate the quirks of the multi-layered technologies that come together to form them. I am a strong proponent 
						and supporter of designing inclusively for all of the different people who might want to use the applications I build. In such a spirit, I have 
						made an effort during my education to learn about how developers build flexible, accessible applications. While I have not had the time to really 
						delve into every aspect of this area of web design, I have made an effort to incorporate some of its principles into this directory application 
						and am planning to continue doing so in my future work. Below, I go through some of these areas, and the strategies I employed to fit my code to them.
					</p>

					<h2>Semantic HTML</h2>

					<p>
						<TextIndent>The</TextIndent> reality of writing web applications is that it is not just the browser that will be consuming the markup that makes up 
						the application's structure. Devices such as screen readers must also be able to move through the markup and be able to build a clear understanding of 
						how pages are laid out and the types of content available within them. While it is possible to build UI components entirely out of <code>div</code> elements, 
						I wanted to make an effor to make use of the wide variety of semantic HTML elements available, which make the work of these screen readers much easier, as they 
						parse through a website. Some of those moments that came up within the development of the application include: 
						<ul style={ {paddingLeft:'20px'} }>
							<li>
								<p>
									Making use of the <code>table</code>, <code>thead</code>, <code>tbody</code>, and <code>tfoot</code> elements when building the <code>ArtistTable</code>, rather
									than building it entirely out of <code>div</code>s.
								</p>
							</li>
							<li>
								<p>
									Using the <code>article</code> tag to wrap each article of the documentation.
								</p>
							</li>
							<li>
								<p>
									Making sure to use the <code>form</code> and <code>input</code> elements in the <code>SearchBar</code>, even if I was overriding their internal state properties 
									to achieve a controlled React component. 
								</p>
							</li>
						</ul>
					</p>

					<h2>Images</h2>

					<p>
						This one is fairly straightforward and standard, but on all images that I include in the application, I made sure to provide an <code>alt</code> attribute so that 
						there was some sort of fallback description of the image even if it failed, and so that screenreaders could interpret their content.
					</p>

					<h2>Color Contrast</h2>

					<p>
						In the visual design of the application, I designed the color schemes so that elements were colored in a way that presented a high color contrast at all times. For 
						those with visual impairments, it can be hard to make out content who's colors are too close to eachother. I figured that even though it's a small detail, this 
						could help provide a more accessible experience to those using the application.
					</p>

					<h2>Future Improvements</h2>

					<p>
						<TextIndent>One</TextIndent> big thing I'd like to study up on more is the use of <code>aria</code> labels on key parts of the application's markup. Beyond that, I am 
						committed to continuing to learn about this area of web development, finding the time to refactor the code I write to be gradually more and more accessible to those 
						who use the applications it generates. 
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/2ddc812b-2390-4664-a2f0-d214dfe7b8ea'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/6a91f5a4-03e4-43e2-8fee-34e8a51fcdfc'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>					

				</article>
			</FromTheTopCradle>
		);
	}
}

Accessibility.contextType = ThemeContext;

export default Accessibility;
