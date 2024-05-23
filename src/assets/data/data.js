import About from '../../components/pages/About';
import Home from '../../components/pages/Home';
import { BiLogoGmail } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";

export let colorsName = [
    { value: 'Red', name: 'Red' }, { value: 'Blue', name: 'Blue' }, { value: 'Green', name: 'Green' }, { value: 'Orange', name: 'Orange' },
    { value: 'Purple', name: 'Purple' }, { value: 'Cyan', name: 'Cyan' }, { value: 'Magenta', name: 'Magenta' }, { value: 'Pink', name: 'Pink' },
    { value: 'Teal', name: 'Teal' }
];

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
    { navTo: '/', navText: 'Home' }, { navTo: '/about-us', navText: 'About Us' }
];

export let RoutesComponents = [
    { path: '/', element: <Home /> }, { path: '/about-us', element: <About /> },
];