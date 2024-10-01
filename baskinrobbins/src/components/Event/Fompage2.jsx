import {Container, Row, Nav} from "react-bootstrap";
import {useState} from "react";
import Footer from "../Fompages/Footer.jsx";
import Event from "./Event.jsx";
import '../../styles/Formpage.css';
import Header from "../Fompages/Header.jsx";




const FomPage2 = () => {
    const [activeMenu, setActiveMenu] = useState("이벤트");

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    const renderContent = () => {
        switch (activeMenu) {
            case "이벤트":
                return <Event/>
        }
    };

    return (
        <div>
            <header>
                <Header theme={'transNav'}/>
            </header>
            <Container>
                <Nav className="justify-content-center my-3">
                    <Nav.Item>
                        <Nav.Link
                            href="#"
                            className={activeMenu === "이벤트" ? "active-menu" : "inactive-menu"}
                            onClick={() => handleMenuClick("이벤트")}
                        >
                            이벤트
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            href="#"
                            className={`inactive-menu disabled-link`}>배라광장
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            href="#"
                            className={`inactive-menu disabled-link`}>BR 레시피
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            href="#"
                            className={`inactive-menu disabled-link`}>마이플레이버 리스트
                        </Nav.Link>
                    </Nav.Item>
                </Nav>

                {/* 콘텐츠 렌더링 */}
                <Row className={'text-center my-5'}>
                    {renderContent()}
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default FomPage2;
