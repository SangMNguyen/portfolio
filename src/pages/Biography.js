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
        text: `My name is Sang Minh Nguyen. I am of Vietnamese descent, and a front-end
        developer based in the New Jersey area. I moved from Vietnam at a young age,
        but growing up the United States has been mostly rewarding, given the resources 
        and opportunities that have opened up for me.\n\n In the field, I love established
        `,
    },
    {
        image: Image2,
        title: 'Why Development?',
        text: `I love creating things ever since I was a kid. I'd always play with Legos and 
        loved every step of the process from designing to building. As a result, I pursued 
        Architecture in highschool, believing it to be my passion. Although I enjoyed it, and 
        the mathematics and concepts weren't difficult to grasp, I realized the creative aspect
        was less than what I'd expected. Fortunately, immediately after, my attention turned 
        to the world of programming. Doing independent research into this world had enlightened
        me about the process of development. I quickly fell in love with in, since I've always 
        been good with recognizing patterns, and I've felt no better place to use that until 
        I found programming. It's also an amazing outlet to release my creativity as well as 
        my love for solving logic puzzles.`,
    },
    {
        image: Image3,
        title: 'What Else Do I Do?',
        text: `In addition to design and development, I also enjoy other hobbies and
        activities. In my sparetime, I play video games of all types, ranging from casual
        puzzles to competitive tactical shooters. Additionally, I enjoy working out as well as hiking, often dabbling 
        in a bit of photography, typically taking landscapes in scenic areas whenever I travel elsewhere. Furthermore, I love writing stories, 
        oftenly in the form of screenplays and scripts. One day, I do aspire to direct and 
        produce those stories into actual films. I also enjoy karaoke tremendously despite not being
        that good of a singer.`,
    },
    {
        image: Image4,
        title: 'My Aspirations for Life',
        text: `What is the overall goal for my work? I'm not exactly someone who's pursuing this career
        for its salary value or status. I enjoy the work that I do, but `,
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