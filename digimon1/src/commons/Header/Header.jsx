import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import PoopA from '../../img/HeaderIcons/Poop-A.gif';
import PoopS from '../../img/HeaderIcons/Poop-S.png';
import EggsA from '../../img/HeaderIcons/Eggs-A.gif';
import EggsS from '../../img/HeaderIcons/Eggs-S.png';
import FreshA from '../../img/HeaderIcons/Fresh-A.gif';
import FreshS from '../../img/HeaderIcons/Fresh-S.png';
import inTrainingA from '../../img/HeaderIcons/In-Training-A.gif';
import inTrainingS from '../../img/HeaderIcons/In-Training-S.png';
import RookieA from '../../img/HeaderIcons/Rookie-A.gif';
import RookieS from '../../img/HeaderIcons/Rookie-S.png';
import ChampionA from '../../img/HeaderIcons/Champion-A.gif';
import ChampionS from '../../img/HeaderIcons/Champion-S.png';
import UltimateA from '../../img/HeaderIcons/Ultimate-A.gif';
import UltimateS from '../../img/HeaderIcons/Ultimate-S.png';
import './header.css';
import { useEffect } from 'react';

function Header({ setUrl }) {
  const headerLinks = [
    {
      name: 'Home',
      link: '/',
      imgStatic: PoopS,
      imgActive: PoopA,
      alt: 'Poop',
    },
    {
      name: 'Eggs',
      link: '/eggs',
      imgStatic: EggsS,
      imgActive: EggsA,
      alt: 'Eggs',
    },
    {
      name: 'Fresh',
      link: '/fresh',
      imgStatic: FreshS,
      imgActive: FreshA,
      alt: 'Fresh',
    },
    {
      name: 'In-Training',
      link: '/in-training',
      imgStatic: inTrainingS,
      imgActive: inTrainingA,
      alt: 'In-Training',
    },
    {
      name: 'Rookie',
      link: '/rookie',
      imgStatic: RookieS,
      imgActive: RookieA,
      alt: 'Rookie',
    },
    {
      name: 'Champion',
      link: '/champion',
      imgStatic: ChampionS,
      imgActive: ChampionA,
      alt: 'Champion',
    },
    {
      name: 'Ultimate',
      link: '/ultimate',
      imgStatic: UltimateS,
      imgActive: UltimateA,
      alt: 'Ultimate',
    },
  ];

  useEffect(() => {
    reloadActiveMenu();
  });

  const activeMenu = (links) => {
    window.history.pushState('', '', links.link);
    setUrl(window.location.pathname);
    const iconBar = document.querySelectorAll('[id^="iconBar-"]');
    const textMenu = document.querySelectorAll('[id^="textMenu-"]');

    textMenu.forEach((text) => {
      if (text.childNodes[0].alt === links.alt) {
        text.classList.add('active-menu');
      } else {
        text.classList.remove('active-menu');
      }
    });

    iconBar.forEach((icon, key) => {
      if (icon.alt === links.alt) {
        icon.src = links.imgActive;
      } else {
        icon.src = headerLinks[key].imgStatic;
      }
    });
  };

  const reloadActiveMenu = () => {
    headerLinks.forEach((links) => {
      if (links.link === window.location.pathname) {
        activeMenu(links);
      }
    });
  };

  return (
    <div className="w-100">
      <Navbar collapseOnSelect expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {headerLinks.map((links) => {
              return (
                <Nav
                  id={`textMenu-${links.name}`}
                  key={links.name}
                  onClick={() => activeMenu(links)}
                  className="me-auto"
                >
                  <img id={`iconBar-${links.name}`} src={links.imgStatic} className="icon-navbar" alt={links.alt} />
                  {links.name}
                </Nav>
              );
            })}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
