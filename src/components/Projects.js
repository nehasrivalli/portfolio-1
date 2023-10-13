import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from '../components/ProjectCards';
import projImg1 from '../assests/img/project-img1.png';
import projImg2 from '../assests/img/project-img2.png';
import projImg3 from '../assests/img/project-img3.png';
import colorSharp2 from '../assests/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {

  const projects = [
   
    
 
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>
                  UI/UX Design for SDG open Hack (03/2023)
I had taken part in SDG open Hack-Google Developer
I designed an app user interface and created a prototype using the
Figma
                  </p>
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>UI/UX Design for SDG open Hack (03/2023)
I had taken part in SDG open Hack-Google Developer
I designed an app user interface and created a prototype using the
Figma</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Surveillance Camera Car (06/2023 - 08/2023)
Mobile controlled camera car using Arduino uno ,ESP32 Camera,DC
Motors.
Arduino Printer (12/2022)
Designed a BRAILLE printer using Arduino an electro-mechanical
device for displaying braille characters with the team of 6 using c
language. </p>

                    </Tab.Pane>
                    
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2 } alt="" />
    </section>
  )
}