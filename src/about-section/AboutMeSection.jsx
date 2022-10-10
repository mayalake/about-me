import React from 'react';

import ContainerWithImage from '../container/ContainerWithImage';
import headshot from '../img/headshot.jpg';

const AboutMeText = () =>
<>
		<p>Hi there, and welcome to my website!<br/>My name is Maya Lake and I am a backend software engineer.</p>
		<p>
			College life:<br/>I graduated from Cal Poly Pomona in 2019 with a B.S. in Computer Science. Early on, I was an Orientation Leader, worked as a barista, and juggled some college jobs on campus while in Greek life.
			Later, I served on e-board for a club for tech startups and a club for women in CS, and became an Azure student ambassador who hosted regular technical workshops.
			Between my second through fifth year of college, I also held 5 software dev internships!
		</p>
		<p>
			Post college:<br/>I landed my first full-time gig as a full-stack web developer at Trip Advisor. My front-end experience was in React JSX and my middlware experience was in Java. I also worked with GraphQL to retrieve data from Postgres!
			Since then, I've pivoted to become a backend web developer at Project44. The micro services I work with are in Java and Spring, and we use both REST endpoint and Kafka when handling data from both SQL and NoSQL databases.
			Currently, I work for Activision doing full stack and dev ops work on the Central Tech Operations team.
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