import './App.css';
import EducationCard from './EducationCard';
import WorkCard from './WorkCard';
import climb from './images/joeClimbing.png';
import chess from './images/joeChess.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Joe Mercer
        </h1>
        <div className="Header-details">
          <div/>
          <div>
            joemercer50@googlemail.co.uk
          </div>
          <div>
            https://github.com/jot6000
          </div>
          <div/>
        </div>
      </header>
      <body className="App-body">
        <div className="Row1">
          <div className="Row-item-primary">
            <h1>
              Technical skills
            </h1>
            <div className="List-segragation">
              <ul>
                <li>React</li>
                <li>Javascript</li>
                <li>Typescript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Node.js</li>
                <li>Visual Basic</li>
                <li>C++</li>
                <li>C#</li>
              </ul>
              <ul>
                <li>Unity</li>
                <li>Unreal Engine</li>
                <li>Maya</li>
                <li>Kofax Capture</li>
                <li>Kofax KTM</li>
                <li>UIpath</li>
                <li>Kapow</li>
                <li>SQL</li>
                <li>Xamarin Forms</li>
              </ul>
            </div>
          </div>
          <div className="Row-item-secondary">
            <h1>
              Personal Statement
            </h1>
            <p>
            Working independently, as a leader, or as an employee, I always give my all to achieve the desired goal. Throughout my working life I have been able to take on heavy workloads and still achieve high standard results consistently. A trait I am very proud of. From working in a range of environments I have had plenty of opportunities to refine my communication and team working skills. Which I feel creates the foundations of any professional relationships. My time working in industry and on startups has allowed me to gain a healthy amount of knowledge in a variety of different technical environments. Which has allowed me to quickly adapt when moving between tech stacks or job roles.
            </p>
          </div>
          <div className="Row-item-primary">
            <h1>
              Soft skills
            </h1>
            <div className="List-segragation">
              <ul>
                <li>Adaptive</li>
                <li>Communication</li>
                <li>Cooperation</li>
                <li>Creativity</li>
                <li>Dependability</li>
                <li>Handling pressure</li>
                <li>Leadership</li>
                <li>Organisation/Planning</li>
                <li>Problem-solving</li>
                <li>Time Keeping</li>   
              </ul>               
            </div>
          </div>
        </div>       
        <h1>
          Education
        </h1>
        <div className="Edu-cards">
          <EducationCard title="Kapow 10 Technical Solutions Specialist" grade="Certified" location="Kofax" time ="2017" headColor="#388697"/>
          <EducationCard title="RPA Developer Foundation Diploma" grade="Certified" location="UI Path" time ="2017" headColor="#388697"/>
          <EducationCard title="Level 5 HND (Games Dev)" grade="Distinction" location="Uxbridge college" time ="Oct 2015 - Jul 2017" headColor="#388697"/>
          <EducationCard title="Level 3 BTEC (Games Dev)" grade="Distinction*, Distinction, Distinction" location="Uxbridge college" time ="Sept 2013 - Jun 2015" headColor="#388697"/>
          <EducationCard title="GCSEs" grade="10 GCSEs A-C" location="Chalfont Community College" time ="Sept 2011 - Jun 2013" headColor="#388697"/>
        </div>
        <h1>
          Work Experience
        </h1>
        <div className="Edu-cards">
          <WorkCard title="@Home Pizza" about={<ul>
            <h4>Delivery Driver</h4>
            <div>Responsibilities:</div>
            <li>Delivering pizza in a timely and professional manner.</li>
            <li>Professionally and politely take orders.</li>
            </ul>} time ="Sept 2018 - Now" headColor="#388697"/>
          <WorkCard title="Hermes" about={<ul>
            <h4>Courier</h4>
            <div>Responsibilities:</div>
            <li>Delivering parcels with tight daily deadlines.</li>
            <li>Managing my daily schedule.</li>
            <li>Building positive relationships with the customers.</li>
            </ul>} time ="Jan 2020 - Jun 2021" headColor="#388697"/>
          <WorkCard title="DCS" about={<ul>
            <h4>Software Engineer</h4>
            <div>Responsibilities:</div>
            <li>Developing/delivering sofware solutions to deadlines.</li>
            <li>Working with clients to understand their needs and requirements.</li>
            <li>Maintaining and improving my skillset to meet buisness demands.</li>
            <li>Training clients in sofware operation.</li>
            <li>Working both independently and in a team.</li>
            <li>Software and hardware installations for clients.</li>
            <li>Deploying databases.</li>
            </ul>} time ="Oct 2017 - Oct 2018" headColor="#388697"/>
          <WorkCard title="Britannia Parking" about={<h4>Parking Officer</h4>} time ="Sept 2016 - Oct 2017" headColor="#388697"/>
          <WorkCard title="Dominoe's" about={<h4>Customer Service Representative</h4>} time ="Feb 2014 - Aug 2016" headColor="#388697"/>
        </div>
        <h1>
          About Me
        </h1>
        <p>For the most part, I am a man who is addicted to hobbies, so I figure i'll just tell you about a couple of them below.</p>
        <div className="Climbing-container">
          <article>
            <h2>Rock Climber</h2>
            <p>
            Well, mostly boulderer for now (Although my new harness should be changing that). I first went at the beginning of 2020, and instantly fell in love. Since then I have found myself spending a large proportion of my free evenings scaling walls in gyms. I find the satisfaction of working out the solution to the boulder problem, then physically testing it. To be one of the best feelings ever. It has inspired me to push myself constantly, from conquering my fear of heights (mostly), to regularly doing pull ups, I find that this hobby is always forcing me to find new ways to improve myself.
            </p>
          </article>
          <img src={climb}alt="Climbing Joe"/>
        </div>
        <div className="Chess-container">
        <img src={chess}alt="Joe playing chess"/>
          <article>
            <h2>Chess Player</h2>
            <p>
            After having mostly cut video games out of my life, I was in search of something to scratch that itch. I was already rock climbing and that satisfied me, but once my body was worn out and I had to spend a day or two recovering, I would grow bored. This is what drove me to the chess board. I had dabbled with the game before but was pretty bad, and so I decided I would try and get good. I learnt a couple of openings and began to get confident with the basic counter attacks and lines that I was coming up against. With little education beyond that I have managed to get myself to a rating of 1000 elo. With that goal accomplished, the next step for me is to sit down and really do some study so that I can be ready for an actual over the board event. 
            </p>
            <p>
            If you happen to also play chess, why not challenge me to game over on chess.com <a href="https://www.chess.com/member/jotikun">here</a>.
            </p>
          </article>
        </div>
      </body>
    </div>
  );
}

export default App;
