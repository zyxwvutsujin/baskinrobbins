import {Container, Row, Nav} from "react-bootstrap";
import {useState} from "react";
import ThisMonthTaste from "./ThisMonthTaste.jsx";
import IceCream from "./IceCream.jsx";
import PrePack from "./PrePack.jsx";
import IceCreamCake from "./IceCreamCake.jsx";
import Desert from "./Desert.jsx";
import Beverage from "./Beverage.jsx";
import Coffee from "./Coffee.jsx";
import Footer from "./Footer.jsx";
import '../../styles/Formpage.css';
import Header from "./Header.jsx";



const FomPage = () => {
    const [activeMenu, setActiveMenu] = useState("이달의 맛");

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    const renderContent = () => {
        switch (activeMenu) {
            case "이달의 맛":
                return <ThisMonthTaste/>
            case "아이스크림":
                return <IceCream/>
            case "프리팩":
                return <PrePack/>
            case "아이스크림케이크":
                return <IceCreamCake/>
            case "디저트":
                return <Desert/>
            case "음료":
                return <Beverage/>
            case "커피":
                return <Coffee/>
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
                            className={activeMenu === "이달의 맛" ? "active-menu" : "inactive-menu"}
                            onClick={() => handleMenuClick("이달의 맛")}
                        >
                            이달의 맛
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            href="#"
                            className={activeMenu === "아이스크림" ? "active-menu" : "inactive-menu"}
                            onClick={() => handleMenuClick("아이스크림")}
                        >
                            아이스크림
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            href="#"
                            className={activeMenu === "프리팩" ? "active-menu" : "inactive-menu"}
                            onClick={() => handleMenuClick("프리팩")}
                        >
                            프리팩
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            href="#"
                            className={activeMenu === "아이스크림케이크" ? "active-menu" : "inactive-menu"}
                            onClick={() => handleMenuClick("아이스크림케이크")}
                        >
                            아이스크림케이크
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            href="#"
                            className={activeMenu === "디저트" ? "active-menu" : "inactive-menu"}
                            onClick={() => handleMenuClick("디저트")}
                        >
                            디저트
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            href="#"
                            className={activeMenu === "음료" ? "active-menu" : "inactive-menu"}
                            onClick={() => handleMenuClick("음료")}
                        >
                            음료
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link
                            href="#"
                            className={activeMenu === "커피" ? "active-menu" : "inactive-menu"}
                            onClick={() => handleMenuClick("커피")}
                        >
                            커피
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

export default FomPage;
