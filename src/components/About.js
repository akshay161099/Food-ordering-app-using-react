import { Link } from "react-router-dom";
import { GITHUB_LINK, GITHUB_LOGO, LINKEDIN_LINK, LINKEDIN_LOGO } from "../utils/constants";
const About = ()=>{
    return (
        <div>
            <div><h1 className="text-4xl px-4 pt-4">About us</h1></div>
            <div>
                <p className="p-10 text-lg">My name is Akshay. I am a Software Developer in the day and open source developer at night.
                This website is a swiggy like - food ordering website. 
                I hope you find this website interesting. The source code is uploaded to my github repo.
                Below is the my github link. 
                </p>
                <div className="px-10 rounded-md">
                <div className="flex items-center border-1 border-solid border-black bg-slate-400 w-[170px] rounded-lg">
                    <Link to={GITHUB_LINK}>
                    <img className="w-10 mix-blend-multiply hover:scale-125 "  src={GITHUB_LOGO}></img>
                    </Link>
                    <Link to={GITHUB_LINK}>Akshay's repo</Link>
                </div>
                <p className="py-4 text-lg">To connect with me on linkedin, follow the link below.</p>
                <div className="flex items-center border-1 border-solid border-black bg-blue-300 w-[170px] rounded-lg">
                    <Link to={LINKEDIN_LINK}>
                    <img className="w-12 rounded-md hover:scale-125" src={LINKEDIN_LOGO}/>
                    </Link>
                    <Link to={LINKEDIN_LINK}>Akshay's Profile</Link>
                </div>    
                </div>
            </div>
        </div>
    );
}
export default About;