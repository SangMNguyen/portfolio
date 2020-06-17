import React, {Component} from 'react';
import Showcase from '../components/Showcase';

const Image1 = require('../assets/bio1.jpg');
const Image2 = require('../assets/bio2.jpg');
const Image3 = require('../assets/bio3.png');
const Image4 = require('../assets/bio4.jpg');

const content = [
    {
        image: Image1,
        title: 'Who Am I?',
        text: `
        My name is Sang Minh Nguyen, and I am a front-end developer based 
        in the New Jersey area. I moved from Vietnam to the US at a young 
        age, and in doing so, has been mostly rewarding. Growing up in the US 
        has given me the education and opportunities to make the decision to 
        pursue Computer Science as a career.`,
    },
    {
        image: Image2,
        title: 'Why Development?',
        text: `All my life, I have known that the potential for innovation and creativity 
        are absolute necessites in a career. As a kid, I'd always play with Legos 
        and loved every step of the process from designing to building. As a 
        result, I pursued Architecture in highschool, believing it to be my 
        passion. However, I realized it was not quite what I had hoped. Thus, my 
        attention turned to the world of programming, and it fueled my 
        ambition for creativity while also challenging me to grow as a creator.`,
    },
    {
        image: Image3,
        title: 'What Else Do I Do?',
        text: `In addition to design and development, I also enjoy other hobbies and
        activities in my sparetime. I play a variety of video games, with focuses 
        on gameplay mechanics and story-telling. Additionally, I enjoy working out as well 
        as hiking and amateur photography. Furthermore, I love writing stories, 
        oftenly in the form of screenplays and scripts. One day, I do aspire to direct and 
        produce those stories into actual films. I also enjoy karaoke tremendously despite 
        not being that good of a singer.`,
    },
    {
        image: Image4,
        title: 'My Aspirations for Life',
        text: `I'm not exactly someone who's pursuing this career for its salary value 
        or status. I enjoy the work that I do, but I especially enjoy seeing my 
        projects being used as intended (or for better) after deployment. I'd like 
        to expand my career farther then a simple front-end developer, and 
        look into projects with other areas from Artificial Intelligence to Game 
        Design. My next projects are a bit ambitious, but it only adds to my 
        excitement and motivation. I hope to be able to participate in more 
        projects that help better the world.`,
    }
];

export default class Biography extends Component {

    render() {

        return (
            <div>
                <div className={`biography`}>
                    <Showcase content={content}/>
                </div>
            </div>
        );
    }
}