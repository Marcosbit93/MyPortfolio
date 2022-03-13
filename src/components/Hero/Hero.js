import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row noppading>
   <LeftSection>
     <SectionTitle main center>
      Welcome To <br /> 
      Mi Personal Portfolio
     </SectionTitle>
     <SectionText>
      The purpose of this portfolio is to show my skills in the most professional way possible and how with passion it is possible to expose it to another level.
     </SectionText>
     <Button onClick={() => window.location = 'http://google.com'} >
       Learn More
     </Button>
   </LeftSection>
 </Section>
);

export default Hero;
