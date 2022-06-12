import profileImage from "../images/profileImage.jpg"

export default function Heading(){
    return(
        <header className="App-header">
            <img className="profile-img" src={profileImage} alt="My face :)"/>
            <h1>
            Joe Mercer
            </h1>
            <div className="Header-details"> 
                <div>
                    joemercer50@googlemail.co.uk
                </div>
                <a href="https://github.com/jot6000">
                    Github
                </a>
            </div>
        </header>
    )
}