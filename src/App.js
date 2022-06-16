import './App.css';
import EducationCard from './EducationCard';
import WorkCard from './WorkCard';
import climb from './images/joeClimbing.png';
import chess from './images/joeChess.png';
import kapow from './images/kapow.jpg';
import hcuc from './images/hcuc.jpg';
import uipath from './images/uipath.png';
import ccc from './images/ccc.png';
import Heading from './features/Heading';
import SkilsAndStatement from './features/SkillsAndStatement';

function App() {
  return (
    <div className="App">
      <Heading/>
        <article>
          <SkilsAndStatement/>
        </article>
        <article>
          <h1>
            Work Experience
          </h1>
          <div className="Edu-cards">
            <WorkCard title="Start Ups (Collective): Front End/Full stack Developer" time ="Oct 2018 - Jan 2019 | May 2021 - Now">
              <ul>
                <div>Responsibilities:</div>
                <li>Building responsive React front ends.</li>
                <li>Managing projects.</li>
                <li>End to end and unit testing.</li>
                <li>Designing full stack solutions.</li>
                <li>System support.</li>
              </ul>
            </WorkCard>
            <WorkCard title="Uxbridge College: Casual Lecturer - Comp Sci" time ="Aug 2021 - Now" >
              <ul>
                <div>Responsibilities:</div>
                <li>Teaching students - Primarily web dev.</li>
                <li>Planning schemes of work and assignments.</li>
                <li>Marking assignments.</li>
              </ul>
            </WorkCard>
            <WorkCard title="@Home Pizza: Delivery Driver" time ="Sept 2018 - Now">
              <ul>
                <div>Responsibilities:</div>
                <li>Delivering pizza in a timely and professional manner.</li>
                <li>Professionally and politely take orders.</li>
              </ul>
            </WorkCard>
            <WorkCard title="Hermes: Courier" time ="Jan 2020 - Jun 2021">
              <ul>
                <div>Responsibilities:</div>
                <li>Delivering parcels with tight daily deadlines.</li>
                <li>Managing my daily schedule.</li>
                <li>Building positive relationships with the customers.</li>
              </ul>
            </WorkCard>
            <WorkCard title="DCS: Software Engineer" time ="Oct 2017 - Oct 2018">
              <ul>
                <div>Responsibilities:</div>
                <li>Developing/delivering sofware solutions to deadlines.</li>
                <li>Working with clients to understand their needs and requirements.</li>
                <li>Maintaining and improving my skillset to meet buisness demands.</li>
                <li>Training clients in sofware operation.</li>
                <li>Working both independently and in a team.</li>
                <li>Software and hardware installations for clients.</li>
                <li>Deploying databases.</li>
              </ul>
            </WorkCard>
            <WorkCard title="Britannia Parking: Parking Officer" time ="Sept 2016 - Oct 2017">
              <h4>College part time job 2</h4>
            </WorkCard>
            <WorkCard title="Dominoe's: Customer Service Representative" time ="Feb 2014 - Aug 2016">
              <h4>College part time job 1</h4>
            </WorkCard>
          </div>
        </article>
        <article>
          <h1>
            Certifications
          </h1>
          <div>
            <EducationCard logo={kapow} title="Kapow 10 Technical Solutions Specialist" grade="Certified" location="Kofax" time ="2017" headColor="#388697"/>
            <EducationCard logo={uipath} title="RPA Developer Foundation Diploma" grade="Certified" location="UI Path" time ="2017" headColor="#388697"/>
            <EducationCard logo={hcuc} title="Level 5 HND (Games Dev)" grade="Distinction" location="Uxbridge college" time ="Oct 2015 - Jul 2017" headColor="#388697"/>
            <EducationCard logo={hcuc} title="Level 3 BTEC (Games Dev)" grade="Distinction*, Distinction, Distinction" location="Uxbridge college" time ="Sept 2013 - Jun 2015" headColor="#388697"/>
            <EducationCard logo={ccc} title="GCSEs" grade="10 GCSEs A-C" location="Chalfont Community College" time ="Sept 2011 - Jun 2013" headColor="#388697"/>
          </div>
        </article>
        <article>
          <h1>
            About Me
          </h1>
          <p>For the most part, I am a man who is addicted to hobbies, so I figure i'll just tell you about a couple of them below.</p>
          <div className="Climbing-container">
            <div>
              <h2>Rock Climber</h2>
              <p>
              Well, mostly boulderer for now (Although my new harness should be changing that). I first went at the beginning of 2020, and instantly fell in love. Since then I have found myself spending a large proportion of my free evenings scaling walls in gyms. I find the satisfaction of working out the solution to the boulder problem, then physically testing it. To be one of the best feelings ever. It has inspired me to push myself constantly, from conquering my fear of heights (mostly), to regularly doing pull ups, I find that this hobby is always forcing me to find new ways to improve myself.
              </p>
            </div>
            <img src={climb}alt="Climbing Joe"/>
          </div>
          <div className="Chess-container">
          <img src={chess}alt="Joe playing chess"/>
            <div>
              <h2>Chess Player</h2>
              <p>
              After having mostly cut video games out of my life, I was in search of something to scratch that itch. I was already rock climbing and that satisfied me, but once my body was worn out and I had to spend a day or two recovering, I would grow bored. This is what drove me to the chess board. I had dabbled with the game before but was pretty bad, and so I decided I would try and get good. I learnt a couple of openings and began to get confident with the basic counter attacks and lines that I was coming up against. With little education beyond that I have managed to get myself to a rating of 1000 elo. With that goal accomplished, the next step for me is to sit down and really do some study so that I can be ready for an actual over the board event. 
              </p>
              <p>
              If you happen to also play chess, why not challenge me to game over on chess.com <a href="https://www.chess.com/member/jotikun">here</a>.
              </p>
            </div>
          </div>
        </article>
    </div>
  );
}

export default App;
