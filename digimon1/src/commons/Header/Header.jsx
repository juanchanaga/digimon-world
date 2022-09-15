import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import PoopA from '../../img/Poop-A.gif';
import PoopS from '../../img/Poop-S.png';
import EggsA from '../../img/Eggs-A.gif';
import EggsS from '../../img/Eggs-S.png';
import FreshA from '../../img/Fresh-A.gif';
import FreshS from '../../img/Fresh-S.png';
import inTrainingA from '../../img/In-Training-A.gif';
import inTrainingS from '../../img/In-Training-S.png';
import RookieA from '../../img/Rookie-A.gif';
import RookieS from '../../img/Rookie-S.png';
import ChampionA from '../../img/Champion-A.gif';
import ChampionS from '../../img/Champion-S.png';
import UltimateA from '../../img/Ultimate-A.gif';
import UltimateS from '../../img/Ultimate-S.png';
import './header.css';

function Header() {
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

  const activeMenu = (textMenu, links) => {
    console.log(textMenu[0]);
    console.log(links);

    textMenu.forEach((text) => {
      if (text.childNodes[0].alt === links.alt) {
        text.classList.add('active-menu');
      } else {
        text.classList.remove('active-menu');
      }
    });
  };

  const animatedIcon = (element, iconBar) => {
    iconBar.forEach((icon, key) => {
      if (element.target.src !== undefined) {
        if (element.target.alt === icon.alt) {
          element.target.src = headerLinks[key].imgActive;
        } else {
          icon.src = headerLinks[key].imgStatic;
        }
      } else {
        if (element.target.childNodes[0].alt === icon.alt) {
          element.target.childNodes[0].src = headerLinks[key].imgActive;
        } else {
          icon.src = headerLinks[key].imgStatic;
        }
      }
    });
  };

  const activeIcon = (element, links) => {
    window.history.pushState('', '', links.link);
    const iconBar = document.querySelectorAll('[id^="iconBar-"]');
    const textMenu = document.querySelectorAll('[id^="textMenu-"]');
    animatedIcon(element, iconBar);
    activeMenu(textMenu, links);
  };

  return (
    <div className="w-100">
      <Navbar bg="secondary" variant="light">
        <Container>
          {headerLinks.map((links) => {
            return (
              <NavbarBrand
                id={`textMenu-${links.name}`}
                key={links.name}
                onClick={(element) => activeIcon(element, links)}
              >
                <img id={`iconBar-${links.name}`} src={links.imgStatic} className="icon-navbar" alt={links.alt} />
                {links.name}
              </NavbarBrand>
            );
          })}
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
