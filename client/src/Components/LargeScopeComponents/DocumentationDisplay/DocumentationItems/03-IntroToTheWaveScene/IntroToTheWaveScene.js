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

class IntroToTheWaveScene extends React.Component {
	render() {

		const initObject = prepareComponent(this.context, this.props, styles);

		return (
			<FromTheTopCradle>
				<article className={ initObject.documentationItemClasses }>
					<h1>Wave Music</h1>

					<p>
						<TextIndent direction='leftToRight'>It</TextIndent> is hard hard to measure the degree to which a foundational technology such as 
						the internet has had, and continues to have on our communities and overall way of life. The technologies that make it up are dynamic,
						ever-shifting and iterating, making it hard to meaningfully quantify their effects. One lens of analysis that can help though, is to look at how the 
						rise of social networks and streaming platforms have contributed to modifying the ways that we interact with eachother and access people's art. 
					</p>

					<p>
						<TextIndent direction='leftToRight'>As</TextIndent> digital social networks have risen, the energy of the discourse on artistic interests 
						has spread out and distributed across the countless comment threads, link forums, facebook groups, chat rooms, and such in which people live 
						their online lives. While the cultural commentary of the music section of newspapers and magazines like Rolling Stone and Pitchfork is still
						important and well-received, people have also turned to the discussions they have with eachother, the posts that come up in their news feeds, 
						and the myriad blogs, youtube channels, and online publications that have sprung up to participate in the conversation. 
					</p>

					<p>
						<TextIndent>In</TextIndent> parallel to these social networks, the development of online streaming platforms such as Spotify, Apple Music, and 
						Soundcloud have led to a fairly dramatic shift away from the traditional models of CD sales, record labels, and radio/media placement. What we have 
						seen come up in addition is a fluid world of playlists, singles, EPs, full-length projects, and in general, an unprecedented ability to publish 
						your art to a global community with more independence than ever before.
					</p>

					<p>
						<TextIndent direction='leftToRight'>What</TextIndent> these socio-technological shifts have contributed to is a partial breakdown of the
						traditional ways that we might have segmented music into genres throughout the 20th century. I am of the belief that these categories have 
						held, and continue to hold legitimate social merit, rising out of the shared meaning we create around the art that is local to the context 
						of our lives. However, I also think that to a large extent they were the emergent result of the gatekeeping created by having a music industry 
						of labels, radio stations, distributors, and promoters making hard decisions around what music they wanted to invest their limited resources towards 
						developing and pushing forward.
					</p>

					<p>
						<TextIndent direction='leftToRight'>The</TextIndent> increasingly distributed nature of the artistic discourse, accompanied by this breaking 
						down of genre barriers, has led to countless musical sub-genres and groups forming across the internet and the real world; it is out of a 
						similar process that wave music has begun. Arising from the melting pot of musical influences that was Soundcloud around 2012 or so, artists 
						such as 

						<a 
							href="https://open.spotify.com/artist/6ejpWdV51Wxr3azIpJXwoQ?lf="
							target='_blank'
							rel='noopen noreferrer'
						>
							&nbsp; Skit
						</a>,
						<a 
							href="https://open.spotify.com/artist/7y4breKexfBWgdyMgHMEHK"
							target='_blank'
							rel='noopen noreferrer'
						>
							&nbsp; Kareful
						</a>,
						<a 
							href="https://open.spotify.com/artist/5JQljNQvDpk1hhKpJHpwNU"
							target='_blank'
							rel='noopen noreferrer'
						>
							&nbsp; Klimeks
						</a>, and
						<a 
							href="https://open.spotify.com/artist/5JQljNQvDpk1hhKpJHpwNU"
							target='_blank'
							rel='noopen noreferrer'
						>
							&nbsp; Plastician
						</a>	

						&nbsp; began to mark their tracks and the mixes they were rinsing out with the tag <code>#wave</code> as a way to differentiate a collective tendency
						towards certain sonic markers. These included ambient, journeying soundscapes, smooth, powerful basslines, and an emotional investment in the song's melodic content 
						that was not as strongly present in some of the dominant styles of those years such as trap and dubstep. 
					</p>

					<p>
						<TextIndent direction='leftToRight'>As</TextIndent> the scene and the communities in which it exists have grown, the idea 
						of wave music has come to mean many things to many people. To me, I see common tendencies around sound design that leads to sounds such as rich, 
						harmonically interesting <a href='https://www.attackmagazine.com/technique/video-tutorials/reese-bass/' target='_blank' rel='noopener noreferrer'>Reese </a> 
						and hip hop basses, ambient and evolving pads, bright, icy plucks, and dominant, charismatic leads. I see this style of music 
						in emotive, cinematic arrangement structures that flow smoothly from one section to the next, often building and releasing tension like a wave would rather than opting for 
						the powerful and abrupt drops of music like electro-house and dubstep. Due to the varied musical styles that are dominant within the local contexts 
						in which this music scene is developing, I also see these tendencies being expressed with rhythmic styles that you might find in styles such as hip hop, garage, 
						house, drum and bass, and breakbeat.
					</p>

					<p>
						<TextIndent direction='leftToRight'>More</TextIndent> important to me than nailing down any specific set of sonic qualities with which one might definitively
						identify what wave music <i>is</i>, is the fact that the community in which this scene exists is truly global, and growing in really exciting ways. All the way into 2019, 
						we have seen what has started as an almost entirely online project start to touch down in its local areas, going as we like to call it, <i>from URL to IRL</i>. Through 
						the tireless efforts of many, and the continuing support of a wider fan base, we have seen the rise of record labels, promotion agencies, art collectives, sound 
						design companies, and audio engineering services. We've seen groups of friends and supporters stringing together limited resources to throw club nights and organize 
						entire cross-European and American tours, bringing people out, off of their devices and onto dance floors.
					</p>

					<p>
						<TextIndent direction='leftToRight'>While</TextIndent> the ambiguity that exists around what exactly 'wave music' is can make it initially challenging in some ways 
						to introduce new listeners to the community, I believe that in the long term, it will continue to be an overall strength. The reality is that the wave scene is 
						one that forms around more than just an easily definable form of music, and the discussion in many of its online forums often centers around music and art that is 
						peripheral or not even directly related. Everyone is joining the discussion and submitting music coming from their own contexts, influences, and interests, and 
						I think that this is something to be celebrated and reinforced. Fundamentally, this is a space in which people are gathering to connect over things that are 
						meaningful to them, to be kind and respectful to one another, and to take part in a collective project that seeks to push all sorts of artistic boundaries to new 
						and exciting places. I look forward to the places that we'll all end up, and am excited to play a part in that discussion with the music and art that I come up with 
						and collaborate with others on.
					</p>

					<HorizontalDivider/>

					<div className={ initObject.navButtonsClasses }>
						<Link to='/documentation/894b3efd-02a9-40d7-adee-aab4548c87f6'><FilledButton text='&larr; Prev Page' onClick={ () => {} }/></Link>	
						<Link to='/documentation/71987a6a-61c1-4c2e-8ad6-af16714c583f'><FilledButton text='Next Page &rarr;' onClick={ () => {} }/></Link>	
					</div>

				</article>
			</FromTheTopCradle>
		);
	}
}

IntroToTheWaveScene.contextType = ThemeContext;

export default IntroToTheWaveScene;
