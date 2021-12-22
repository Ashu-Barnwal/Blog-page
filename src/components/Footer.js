import { IconContext } from "react-icons";
import{ 
    Container
} from 'react-bootstrap';
import { FaGithub, 
    FaTwitter, 
    FaInstagram, 
    FaLinkedin,
    FaGooglePlus
} from 'react-icons/fa';

const Footer = () => {
    const url={
        linkedin: 'https://www.linkedin.com/ashuuu/',
        github: 'https://github.com/Ashu-Barnwal',
        twitter: 'https://twitter.com/ashuu_ashu',
        gmail: 'mailto:ashuu.barnwal@gmail.com',
        instagram: 'https://instagram.com/ashubarnwal'
    }
    const today = new Date();
    
    return (
        <footer className='bg-dark'>
            <Container>
                <IconContext.Provider value={{ 
                    color: "crimson", 
                    size: '30px', 
                    className: 'footerIcon' 
                    }}>

                    <ul className='text-center pt-1'>
                    <li className='list-inline-item'>
                        <a href={url.github} className='btn'>
                        <FaGithub />
                        </a>
                    </li>
                    <li className='list-inline-item'>
                        <a href={url.linkedin} className='btn'>
                        <FaLinkedin />
                        </a>
                    </li>
                    <li className='list-inline-item'>
                        <a href={url.twitter} className='btn'>
                        <FaTwitter/>
                        </a>
                    </li>
                    <li className='list-inline-item'>
                        <a href={url.github} className='btn'>
                        <FaInstagram/>
                        </a>
                    </li>
                    <li className='list-inline-item'>
                        <a href={url.github} className='btn'>
                        <FaGooglePlus/>
                        </a>
                    </li>
                    </ul>
                </IconContext.Provider>
                
            </Container>
            <div className="copyright text-light text-center pb-1">
            &copy; {today.getFullYear()} Copyright: <span className="text-secondary">My Blog</span>
                </div>
        </footer>
    )
}

export default Footer