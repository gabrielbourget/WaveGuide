import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import { ThemeContext } from '../../../../../ThemeContext';

import FromTheTopCradle from '../../../../Cradles/FromTheTopCradle/FromTheTopCradle';
import TextIndent from '../../../../TextLayout/TextIndent/TextIndent';
import FilledButton from '../../../../Buttons/FilledButton/FilledButton';
import HorizontalDivider from '../../../../Dividers/HorizontalDivider/HorizontalDivider';
import SelectionIndicator from '../../../../Icons/Indicators/SelectionIndicator/SelectionIndicator';

import styles from '../../DocumentationItem/DocumentationItem.module.scss';
import localStyles from './SelectionIndicators.module.scss';
import { prepareComponent } from '../../DocumentationItem/helpers';

class SelectionIndicators extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					
					<h1>Selection Indicators</h1>

					<p>
						<TextIndent>Another</TextIndent> one of the first components I started with while building out this application was the selection indicator.
						Used as a building block to common UI components like checkboxes and radio button sets, I built these in mind for composition into such components. 
						It achieves its visual presentation by nesting an inside div within a border div. When the component is in a selected state, this inside div has 
						a background fill, and when it is not, the fill is transparent. 
					</p>

					<p>
						<TextIndent>The</TextIndent> component keeps track of this selection status through a boolean held in internal state. It also 
						takes a shape prop which allows the component to be rendered in a square, rounded square, and circular format. Finally, it 
						subscribes to the ThemeContext, allowing it to render out a dark theme and light theme version, as appropriate. A demonstration of these 
						indicators below in their various forms and states, is provided.
					</p>

					<div className={ localStyles.indicatorGallery }>
						<div className={ localStyles.indicatorGalleryRow }>
							<SelectionIndicator shape='square'/>
							<h4>Square</h4>
						</div>
						<div className={ localStyles.indicatorGalleryRow }>
							<SelectionIndicator shape='roundedSquare'/>
							<h4>Rounded Square</h4>
						</div>
						<div className={ localStyles.indicatorGalleryRow }>
							<SelectionIndicator shape='round'/>
							<h4>Circle</h4>
						</div>
					</div>

					<h2>Remaining Issues</h2>

					<p>
						<TextIndent>While</TextIndent> this component is meeting a lot of the functional requirements that I was looking to achieve, there 
						are still presentational issues that are causing me to consider refactoring it. Currently, the internal div that fills or not depending
						on the indicator's selected state sometimes comes out with a skewed shape, not totally filling up the space it's supposed to. I am planning 
						to look into to see if the issue can be solved in a div-based presentation paradigm. If not, I may refactor the component to switch between 
						displaying SVG icons representing the different shapes available. 
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/ac20c586-039e-4ea4-9b20-8a41cdab3a38'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/21a57b18-8be9-45ca-9e79-66b6511e995f'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>
										
				</article>
			</FromTheTopCradle>
		);
	}
}

SelectionIndicators.contextType = ThemeContext;

export default SelectionIndicators;
