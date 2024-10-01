import {Container, Row, Nav} from "react-bootstrap";
import Footer from "../Fompages/Footer.jsx";
import {useState} from "react";
import History from "./History.jsx";
import '../../styles/Formpage.css';
import Header from "../Fompages/Header.jsx";





const FomPage3 = () => {
    const [activeMenu, setActiveMenu] = useState("이달의 맛 히스토리");

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    const renderContent = () => {
        switch (activeMenu) {
            case "이달의 맛 히스토리":
                return <History/>
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
                            className={`inactive-menu disabled-link`}>브랜드 스토리
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            href="#"
                            className={activeMenu === "이달의 맛 히스토리" ? "active-menu" : "inactive-menu"}
                            onClick={() => handleMenuClick("이달의 맛 히스토리")}
                        >이달의 맛 히스토리
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            href="#"
                            className={`inactive-menu disabled-link`}>Be Better
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

export default FomPage3;
