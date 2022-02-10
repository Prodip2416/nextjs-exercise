import Style from '../../styles/Menu.module.css';
import Nav from 'react-bootstrap/Nav'
import { useState } from 'react';
import TotalProduct from './TotalProduct';
import SectionTitle from '../shared/SectionTitle';

const Menu = () => {
    const [selectedMenu, setSelectedMenu] = useState('Sports');

    return (
        <div className="container-fluid">
            <SectionTitle sectionTitle="New Products"/>
            <div>
                <Nav className="justify-content-center" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link className={`${selectedMenu == 'Sports' ? Style.selectedMenuLink : ''} ${Style.menuLink}`} onClick={() => setSelectedMenu('Sports') }>Sports</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={`${selectedMenu == 'Casuals' ? Style.selectedMenuLink : ''} ${Style.menuLink}`} onClick={() => { setSelectedMenu('Casuals') }}>Casuals</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={`${selectedMenu == 'LadiesFlats' ? Style.selectedMenuLink : ''} ${Style.menuLink}`} onClick={() => { setSelectedMenu('LadiesFlats') }}>Ladies Flats</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={`${selectedMenu == 'Sandals' ? Style.selectedMenuLink : ''} ${Style.menuLink}`} onClick={() => { setSelectedMenu('Sandals') }}>Sandals</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={`${selectedMenu == 'Formal' ? Style.selectedMenuLink : ''} ${Style.menuLink}`} onClick={() => { setSelectedMenu('Formal') }}>Formal</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className={`${selectedMenu == 'Accessories' ? Style.selectedMenuLink : ''} ${Style.menuLink}`} onClick={() => { setSelectedMenu('Accessories') }}>Accessories</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div>
                <TotalProduct category={selectedMenu}/>
            </div>
        </div>
    );
}

export default Menu;
