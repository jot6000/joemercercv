import './App.css';
import EducationCard from './EducationCard';

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
              I have decided since working as a software engineer delivering Kofax and RPA solutions, that my passion does not lie in business automation. After an attempt to get a project off the ground with some friends and multiple personal projects I have found my passion lies in the realm of web dev. Until now I have been using react to create websites, but I would be willing to transfer those skills to another framework such as angular or Vue if needed.
            </p>
          </div>
        </div>
        <h1>
          Education
        </h1>
        <div className="Edu-cards">
          <EducationCard title="Level 5 HND (Games Dev)" grade="Distinction" location="Uxbridge college" time ="Oct 2015 - Jul 2017" headColor="#388697"/>
          <EducationCard title="Level 3 BTEC (Games Dev)" grade="Distinction*, Distinction, Distinction" location="Uxbridge college" time ="Sept 2013 - Jun 2015" headColor="#388697"/>
          <EducationCard title="GCSE's" grade="10 GCSE's A-C" location="Chalfont Community College" time ="sept 2013 - Jun 2015" headColor="#388697"/>
          <EducationCard title="Kapow 10 Technical Solutions Specialist" grade="Pass" location="Kofax" time ="2017" headColor="#388697"/>
          <EducationCard title="RPA Developer Foundation Diploma" grade="Pass" location="UI Path" time ="2017" headColor="#388697"/>
        </div>
        <h1>
          Work Experience
        </h1>
        <h1>
          About Me
        </h1>
      </body>
    </div>
  );
}

export default App;
