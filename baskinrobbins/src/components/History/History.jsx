import "../../styles/Event.css";
import {useState} from "react";

const History = () => {
    const [selectedYear, setSelectedYear] = useState("2024");
    const [viewMode, setViewMode] = useState("year");  // "year"는 연도별 보기, "theme"는 테마별 보기
    const [selectedTheme, setSelectedTheme] = useState("배라이즈백");  // "popular"는 테마별 보기에서 첫 번째 테마

    const years = ["2024", "2023", "2022"];
    const images = {
        "2024": [
            { src: "../history/24-1.jpg", title: "2024년 1월 아이스크림" },
            { src: "../history/24-2.jpg", title: "2024년 2월 아이스크림" },
            { src: "../history/24-3.jpg", title: "2024년 3월 아이스크림" },
            { src: "../history/24-4.jpg", title: "2024년 4월 아이스크림" },
            { src: "../history/24-5.jpg", title: "2024년 5월 아이스크림" },
            { src: "../history/24-6.png", title: "2024년 6월 아이스크림" },
            { src: "../history/24-7.png", title: "2024년 7월 아이스크림" },
            { src: "../history/24-8.png", title: "2024년 8월 아이스크림" },
        ],
        "2023": [
            { src: "../history/23-1.jpg", title: "2023년 1월 아이스크림" },
            { src: "../history/23-2.jpg", title: "2023년 2월 아이스크림" },
            { src: "../history/23-3.jpg", title: "2023년 2월 추가 아이스크림" },
            { src: "../history/23-4.jpg", title: "2023년 3월 아이스크림" },
            { src: "../history/23-5.jpg", title: "2023년 4월 아이스크림" },
            { src: "../history/23-6.jpg", title: "2023년 5월 아이스크림" },
            { src: "../history/23-7.jpg", title: "2023년 6월 아이스크림" },
            { src: "../history/23-8.jpg", title: "2023년 7월 아이스크림" },
            { src: "../history/23-9.png", title: "2023년 8월 아이스크림" },
            { src: "../history/23-10.png", title: "2023년 9월 아이스크림" },
            { src: "../history/23-11.jpg", title: "2023년 10월 아이스크림" },
            { src: "../history/23-12.jpg", title: "2023년 10월 추가 아이스크림" },
            { src: "../history/23-13.jpg", title: "2023년 11월 아이스크림" },
            { src: "../history/23-14.jpg", title: "2023년 12월 아이스크림" },
        ],
        "2022": [
            { src: "../history/22-1.jpg", title: "2022년 1월 아이스크림" },
            { src: "../history/22-2.jpg", title: "2022년 2월 아이스크림" },
            { src: "../history/22-3.jpg", title: "2022년 3월 아이스크림" },
            { src: "../history/22-4.jpg", title: "2022년 4월 아이스크림" },
            { src: "../history/22-5.jpg", title: "2022년 5월 아이스크림" },
            { src: "../history/22-6.jpg", title: "2022년 6월 아이스크림" },
            { src: "../history/22-7.jpg", title: "2022년 7월 아이스크림" },
            { src: "../history/22-8.jpg", title: "2022년 8월 아이스크림" },
            { src: "../history/22-9.jpg", title: "2022년 9월 아이스크림" },
            { src: "../history/22-10.jpg", title: "2022년 10월 아이스크림" },
            { src: "../history/22-11.jpg", title: "2022년 11월 아이스크림" },
            { src: "../history/22-12.jpg", title: "2022년 12월 아이스크림" },
        ]
    };

    const themes = ["배라이즈백", "레전더리플레이버", "그래이맛어워드"]
    const Img = {
        "배라이즈백": [
            { src: "../history/b-1.jpg", title: "배라의 인기 메뉴 1" },
            { src: "../history/b-2.jpg", title: "배라의 인기 메뉴 2" },
            { src: "../history/b-3.jpg", title: "배라의 인기 메뉴 3" },
            { src: "../history/b-4.jpg", title: "배라의 인기 메뉴 4" },
            { src: "../history/b-5.jpg", title: "배라의 인기 메뉴 5" },
            { src: "../history/b-6.jpg", title: "배라의 인기 메뉴 6" },
            { src: "../history/b-7.jpg", title: "배라의 인기 메뉴 7" },
            { src: "../history/b-8.jpg", title: "배라의 인기 메뉴 8" },
            { src: "../history/b-9.png", title: "배라의 인기 메뉴 9" }
        ],
        "레전더리플레이버": [
            { src: "../history/r-1.jpg", title: "전설의 플레이버 1" },
            { src: "../history/r-2.jpg", title: "전설의 플레이버 2" }
        ],
        "그래이맛어워드": [
            { src: "../history/g-1.jpg", title: "그레이 맛 어워드 1" },
            { src: "../history/g-2.jpg", title: "그레이 맛 어워드 2" },
            { src: "../history/g-3.jpg", title: "그레이 맛 어워드 3" },
            { src: "../history/g-4.jpg", title: "그레이 맛 어워드 4" },
            { src: "../history/g-5.jpg", title: "그레이 맛 어워드 5" },
            { src: "../history/g-6.jpg", title: "그레이 맛 어워드 6" }
        ]
    };


    return (
        <div className="content">
            <h1 className="logo-font">이달의 맛 히스토리</h1>
            <h5 className="introduce-font">일년 열 두 달 새로운 맛, 배스킨라빈스 이달의 맛 히스토리</h5>

            <div className="menu-tabs">
                <div
                    className={`menu-tab ${viewMode === "year" ? "active" : "inactive"}`}
                    onClick={() => setViewMode("year")}
                >
                    연도별 보기
                </div>
                <div
                    className={`menu-tab ${viewMode === "theme" ? "active" : "inactive"}`}
                    onClick={() => setViewMode("theme")}
                >
                    테마별 보기
                </div>
            </div>

            <div className={'border-top menu-border'}>

                {/* 연도별 보기 */}
                {viewMode === "year" && (
                    <>
                        <div className="year-selector">
                            {years.map(year => (
                                <span
                                    key={year}
                                    className={selectedYear === year ? "active-year" : ""}
                                    onClick={() => setSelectedYear(year)}
                                >
                                {year}
                                </span>
                            ))}
                        </div>
                        <div className="image-grid">
                            {images[selectedYear].map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image.src} alt={image.title} className="history-img"/>
                                </div>
                            ))}
                        </div>
                    </>
                )}

                {/* 테마별 보기 */}
                {viewMode === "theme" && (
                    <>
                        <div className="year-selector">
                            {themes.map(theme => (
                                <span
                                    key={theme}
                                    className={selectedTheme === theme ? "active-theme" : ""}
                                    onClick={() => setSelectedTheme(theme)}
                                >
                                {theme}
                                </span>
                            ))}
                        </div>
                        <div className="image-grid">
                            {Img[selectedTheme].map((image, index) => (
                                <div key={index} className="image-item">
                                    <img src={image.src} alt={image.title} className="history-img"/>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default History;
