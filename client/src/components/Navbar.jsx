import { React, useState } from 'react';
import './Navbar.css'; // You can import your styles here

const Navbar = () => {
    const [clientsActive, setClientsActive] = useState(false);
    const [servicesActive, setServicesActive] = useState(false);

    const handleClientsClick = () => {
        setClientsActive(!clientsActive);
        setServicesActive(false);
    };

    const handleServicesClick = () => {
        setServicesActive(!servicesActive);
        setClientsActive(false);
    };

    return (
        <>
            <nav class="mask">
                <a href="#">Mask with linear-gradient</a>
                <ul class="list">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <button class="search">Search</button>
                <button class="menu">Menu</button>
            </nav>


            <a href="https://dribbble.com/shots/5844983-Sub-Nav-Interaction-Concept" className="signature" target="_blank">Designed by Carson Monroe</a>
        </>
    );
};

export default Navbar;