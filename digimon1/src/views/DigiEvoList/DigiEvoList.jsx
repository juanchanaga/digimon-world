import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
  careTags,
  statsTags,
  digimonsEggs,
  digimonsFresh,
  digimonsInTraining,
  digimonsRookie,
} from '../../utils/Digimons';
import './digiEvoList.css';

function DigiEvoList(url) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    renderEggs();
    renderFresh();
    renderInTraining();
    renderRookie();
    renderChampion();
    renderUltimate();
  });

  const digimonApi = (digimonArray, digimonName, index, type) => {
    axios
      .get(`https://digimon-api.vercel.app/api/digimon/name/${digimonName.toLowerCase()}`)
      .then((response) => {
        if (type === 1) {
          digimonArray[index].image = response.data[0].img;
        } else {
          digimonArray[index].imageTo = response.data[0].img;
        }
        if (index === digimonArray.length - 1) {
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(true);
      });
  };

  const renderHome = () => {
    return 'HOME';
  };

  const renderEggs = () => {
    return (
      <Container>
        <Row className="header-row" key="eggs">
          <Col xs={4}>Current Digimon</Col>
          <Col>Digivolves to</Col>
        </Row>
        {digimonsEggs.map((eggs, index) => {
          digimonApi(digimonsEggs, eggs.digivolvesTo, index, 2);
          return !isLoading ? (
            <Row className="row-content" key={eggs.digimon}>
              <Col xs={4} className={'digimon-column'}>
                <img src={eggs.image} alt={eggs.digimon} className="w-25 mt-4" />
                <span className="text">{eggs.digimon}</span>
              </Col>
              <Col className="digimon-column">
                <img src={eggs.imageTo} alt={eggs.digivolvesTo} className="image-to" />
                <span className="text">{eggs.digivolvesTo}</span>
              </Col>
              <Col>
                <span className="title-row">Care Requirements</span>
                {careTags.map((tag) => {
                  return (
                    <Row key={tag}>
                      <Col>{tag}</Col>
                      <Col>{eggs.careRequirements[tag.toLowerCase()]}</Col>
                    </Row>
                  );
                })}
              </Col>
              <Col>
                <span className="title-row">Stats Requirements</span>
                {statsTags.map((tag) => {
                  return (
                    <Row key={tag}>
                      <Col>{tag}</Col>
                      <Col>{eggs.statsRequirements[tag.toLowerCase()]}</Col>
                    </Row>
                  );
                })}
              </Col>
              <Row>
                <Col xs={{ span: 1, offset: 4 }} className="fw-bolder">
                  Special
                </Col>
                <Col xs={{ span: 7 }}>{eggs.careRequirements.special}</Col>
              </Row>
            </Row>
          ) : null;
        })}
      </Container>
    );
  };

  const renderFresh = () => {
    return (
      <Container>
        <Row className="header-row" key="fresh">
          <Col xs={4}>Current Digimon</Col>
          <Col>Digivolves to</Col>
        </Row>
        {digimonsFresh.map((fresh, index) => {
          digimonApi(digimonsFresh, fresh.digimon, index, 1);
          digimonApi(digimonsFresh, fresh.digivolvesTo, index, 2);
          return !isLoading ? (
            <Row className="row-content" key={fresh.digimon}>
              <Col xs={4} className={'digimon-column'}>
                <img src={fresh.image} alt={fresh.digimon} className="image" />
                <span className="text">{fresh.digimon}</span>
              </Col>
              <Col className="digimon-column">
                <img src={fresh.imageTo} alt={fresh.digivolvesTo} className="image-to" />
                <span className="text">{fresh.digivolvesTo}</span>
              </Col>
              <Col>
                <span className="title-row">Care Requirements</span>
                {careTags.map((tag) => {
                  return (
                    <Row key={tag}>
                      <Col>{tag}</Col>
                      <Col>{fresh.careRequirements[tag.toLowerCase()]}</Col>
                    </Row>
                  );
                })}
              </Col>
              <Col>
                <span className="title-row">Stats Requirements</span>
                {statsTags.map((tag) => {
                  return (
                    <Row key={tag}>
                      <Col>{tag}</Col>
                      <Col>{fresh.statsRequirements[tag.toLowerCase()]}</Col>
                    </Row>
                  );
                })}
              </Col>
              <Row>
                <Col xs={{ span: 1, offset: 4 }} className="fw-bolder">
                  Special
                </Col>
                <Col xs={{ span: 7 }}>{fresh.careRequirements.special}</Col>
              </Row>
            </Row>
          ) : null;
        })}
      </Container>
    );
  };

  const renderInTraining = () => {
    return (
      <Container>
        <Row className="header-row" key="fresh">
          <Col xs={4}>Current Digimon</Col>
          <Col>Digivolves to</Col>
        </Row>
        {digimonsInTraining.map((training, index) => {
          digimonApi(digimonsInTraining, training.digimon, index, 1);
          digimonApi(digimonsInTraining, training.digivolvesTo, index, 2);
          return !isLoading ? (
            <Row className="row-content" key={training.digivolvesTo}>
              <Col xs={4} className={'digimon-column'}>
                <img src={training.image} alt={training.digimon} className="image" />
                <span className="text">{training.digimon}</span>
              </Col>
              <Col className="digimon-column">
                <img src={training.imageTo} alt={training.digivolvesTo} className="image-to" />
                <span className="text">{training.digivolvesTo}</span>
              </Col>
              <Col>
                <span className="title-row">Care Requirements</span>
                {careTags.map((tag) => {
                  return (
                    <Row key={tag}>
                      <Col>{tag}</Col>
                      <Col>{training.careRequirements[tag.toLowerCase()]}</Col>
                    </Row>
                  );
                })}
              </Col>
              <Col>
                <span className="title-row">Stats Requirements</span>
                {statsTags.map((tag) => {
                  return (
                    <Row key={tag}>
                      <Col>{tag}</Col>
                      <Col>{training.statsRequirements[tag.toLowerCase()]}</Col>
                    </Row>
                  );
                })}
              </Col>
              <Row>
                <Col xs={{ span: 1, offset: 4 }} className="fw-bolder">
                  Special
                </Col>
                <Col xs={{ span: 7 }}>{training.careRequirements.special}</Col>
              </Row>
            </Row>
          ) : null;
        })}
      </Container>
    );
  };

  const renderRookie = () => {
    return (
      <Container>
        <Row className="header-row" key="fresh">
          <Col xs={4}>Current Digimon</Col>
          <Col>Digivolves to</Col>
        </Row>
        {digimonsRookie.map((rookie, index) => {
          digimonApi(digimonsRookie, rookie.digimon, index, 1);
          digimonApi(digimonsRookie, rookie.digivolvesTo, index, 2);
          return !isLoading ? (
            <Row className="row-content" key={rookie.digivolvesTo + rookie.digimon}>
              <Col xs={4} className={'digimon-column'}>
                <img src={rookie.image} alt={rookie.digimon} className="image" />
                <span className="text">{rookie.digimon}</span>
              </Col>
              <Col className="digimon-column">
                <img src={rookie.imageTo} alt={rookie.digivolvesTo} className="image-to" />
                <span className="text">{rookie.digivolvesTo}</span>
              </Col>
              <Col>
                <span className="title-row">Care Requirements</span>
                {careTags.map((tag) => {
                  return (
                    <Row key={tag}>
                      <Col>{tag}</Col>
                      <Col>{rookie.careRequirements[tag.toLowerCase()]}</Col>
                    </Row>
                  );
                })}
              </Col>
              <Col>
                <span className="title-row">Stats Requirements</span>
                {statsTags.map((tag) => {
                  return (
                    <Row key={tag}>
                      <Col>{tag}</Col>
                      <Col>{rookie.statsRequirements[tag.toLowerCase()]}</Col>
                    </Row>
                  );
                })}
              </Col>
              <Row>
                <Col xs={{ span: 1, offset: 4 }} className="fw-bolder">
                  Special
                </Col>
                <Col xs={{ span: 7 }}>{rookie.careRequirements.special}</Col>
              </Row>
            </Row>
          ) : null;
        })}
      </Container>
    );
  };

  const renderChampion = () => {
    return 'CHAMPION';
  };
  const renderUltimate = () => {
    return 'ULTIMATE';
  };

  const renderError = () => {
    return 'ERROR';
  };

  const renderContainer = (path) => {
    switch (path) {
      case '/':
        return renderHome();
      case '/eggs':
        return renderEggs();
      case '/fresh':
        return renderFresh();
      case '/in-training':
        return renderInTraining();
      case '/rookie':
        return renderRookie();
      case '/champion':
        return renderChampion();
      case '/ultimate':
        return renderUltimate();
      default:
        return renderError();
    }
  };

  return (
    <div className="dynamic-container">
      <Container fluid className="my-3">
        {renderContainer(url.url)}
      </Container>
    </div>
  );
}

export default DigiEvoList;
