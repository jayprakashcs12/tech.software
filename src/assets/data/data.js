import { FaCodepen, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiFacebook, FiGithub, FiPhone } from "react-icons/fi";
import { BsStackOverflow, BsWhatsapp } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { BiLogoGmail } from "react-icons/bi";
import About from '../../components/pages/About';
import Home from '../../components/pages/Home';

export let Contacts = { 
    phoneNumber: "8563001092", personName: 'Mail Me', phoneURL: "tel:8563001092", whatsAppUrl: "https://wa.me/8563001092", 
    mailUrl: "mailto:jayprakash199221@gmail.com",
};

export let ContactsItem = [
    { text: Contacts.personName, url: Contacts.mailUrl, icon: <BiLogoGmail className="social-icon" /> }, 
    { text: Contacts.phoneNumber, url: Contacts.phoneURL, icon: <FiPhone className="social-icon" /> },
    { text: Contacts.phoneNumber, url: Contacts.whatsAppUrl, icon: <BsWhatsapp className="social-icon" /> }
];

export let NavRoutes = [
    { navTo: '/', navText: 'Home' }, { navTo: '/about-us', navText: 'About Us' },
];

export let RoutesComponents = [
    { path: '/', component: Home }, { path: '/about-us', component: About },
];

export let SocialLinks = [
    { name: 'Codepen', icon: <FaCodepen className="social-icon" />, url: 'https://codepen.io/jayprakashcs12/' },
    { name: 'Instagram', icon: <FaInstagram className="social-icon" />, url: 'https://www.instagram.com/jayprakashsingh10031/' },
    { name: 'Github', icon: <FiGithub className="social-icon" />, url: 'https://github.com/jayprakashcs12/' },
    { name: 'Linkedin', icon: <SlSocialLinkedin className="social-icon" />, url: 'https://www.linkedin.com/in/jay-prakash-singh-028957128/' },
    { name: 'Facebook', icon: <FiFacebook className="social-icon" />, url: 'https://www.facebook.com/jayprakash199221/' },
    { name: 'Twitter', icon: <FaXTwitter className="social-icon" />, url: 'https://twitter.com/jayprakash2108/' },
    { name: 'Stack Overflow', icon: <BsStackOverflow className="social-icon" />, url: 'https://stackoverflow.com/users/18405681/jay-prakash-singh/' },
];