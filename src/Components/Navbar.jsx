import logo from "../assets/rglogo.png.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
const Navbar = () => {
  return (
    
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-16" src= {logo} alt="logo"/>
        
        </div>

       
       

    <div className="m-3 flex items-center justify-centre gap-5 text-2xl">
    <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
     
        <a
          href="https://github.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://x.com/i/flow/login"
          target="_blank"
          rel="noopener noreferrer"
        >
        <FaTwitter/>
        </a>

        <a
          href="https://www.google.com/imgres?q=resume%20template%20download%20free&imgurl=https%3A%2F%2Fwww.freesumes.com%2Fwp-content%2Fuploads%2F2023%2F05%2Fresume-template-with-photo.jpg&imgrefurl=https%3A%2F%2Fwww.freesumes.com%2Ffree-resume-templates-for-ms-word%2F&docid=d0KAKmhmCCCWLM&tbnid=Zd5o_2yihoPmAM&vet=12ahUKEwjbhfLJ1eWLAxXtbPUHHZa0NTAQM3oECDIQAA..i&w=700&h=900&hcb=2&ved=2ahUKEwjbhfLJ1eWLAxXtbPUHHZa0NTAQM3oECDIQAA"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <FaFileAlt/>
        </a>
     
    </div>
    </nav>
  );
};

export default Navbar;
