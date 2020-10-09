import React from 'react';

import ContainerWithImage from '../container/ContainerWithImage';
import headshot from '../img/headshot.jpg';

const AboutMeText = () =>
<>
		<p>Hi there, and welcome to my website!<br/>My name is Maya Lake and I am a software engineer on temporary retirement (unemployed).</p>
		<p>
			College life:<br/>I graduated from Cal Poly Pomona in 2019 with a B.S. in Computer Science. Early on, I was an Orientation Leader, worked as a barista, and juggled some college jobs on campus while in Greek life.
			Later, I served on e-board for a club for tech startups and a club for women in CS, and became an Azure student ambassador who hosted regular technical workshops.
			Between my second through fifth year of college, I also held 5 software dev internships!
		</p>
		<p>
			Post college:<br/>I landed my first full-time gig as a full-stack web developer. My front-end experience was in React JSX and my middlware experience was in Java. I also worked with GraphQL and did some modest database stuff with Postgres!I was with the company for about 1 year before I experienced my first layoff.
			Since then, I've taken a bit of a break from being an adult and have been catching up on Netflix instead. I've been very fortunate to be able to experience temporary retirement, but it's lead to my questioning my sense of identity so I would love to jump back into career life full force! Any leads would be greatly appreciated.
		</p>
		<p>Likes and Dislikes:<br/>My likes include working in an uplifting team dynamic, a good adrenaline rush, and pineapples on pizza. My dislikes include overtly competitive environments, passive aggression, and anchovies on pizza.</p>
</>;

const AboutMeSection = () =>
	<ContainerWithImage
		id="AboutMeSection"
		name="About Me"
		image={headshot}
		isCircleImage
	>
		<AboutMeText />
	</ContainerWithImage>;

export default AboutMeSection;