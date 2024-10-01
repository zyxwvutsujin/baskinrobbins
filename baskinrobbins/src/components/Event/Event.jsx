import "../../styles/Event.css";
import {useState} from "react";


const Event = () => {
    const [selectedTab, setSelectedTab] = useState("전체"); // 기본값 전체

    const events = {
        전체: [
            {
                id: 1,
                title: "우석PICK 블록팩 세트 사전예약 시, 3천원 OFF!",
                date: "2024-09-27 ~ 2024-10-03",
                img: "../event/ev0.png",
                content: "프로모션"
            },
            {
                id: 2,
                title: "우석이 디지털 굿즈4차",
                date: "2024.09.25 ~ 2024.10.01",
                img: "../event/ev1.png",
                content: "온라인 이벤트"
            },
            {
                id: 3,
                title: "스윗 테라피",
                date: "2024.09.26 ~ 2024.09.30",
                img: "../event/ev2.png",
                content: "프로모션"
            },
            {
                id: 4,
                title: "지금 배라에서 우석이 포근 블랭킷을 만나보세요!",
                date: "2024.09.25 ~ 소진 시까지",
                img: "../event/ev3.png",
                content: "프로모션"
            },
            {
                id: 5,
                title: "쿼터 이상 구매 시,우석이 포토카드 SET 600원",
                date: "2024-09-13 ~ 소진 시까지",
                img: "../event/ev4.png",
                content: "프로모션"
            },
            {
                id: 6,
                title: "우석이와 배라샷, 우석이 등신대 인증샷 이벤트",
                date: "2024-09-23 ~ 2024-10-30",
                img: "../event/ev5.png",
                content: "프로모션"
            },
            {
                id: 7,
                title: "우석이 등신대 인증샷 EVENT",
                date: "2024-08-30 ~ 2024-09-30",
                img: "../event/ev7.png",
                content: "프로모션"
            },
            {
                id: 8,
                title: "LG U+ 멤버십 배스킨라빈스 특별한 제휴 혜택!",
                date: "2024-03-01 ~ 2024-12-31",
                img: "../event/ev7-1.jpg",
                content: "제휴혜택"
            },
            {
                id: 9,
                title: "워크샵 by 배스킨라빈스 그랜드 오픈",
                date: "상시 운영",
                img: "../event/ev8.png",
                content: "프로모션"
            },
            {
                id: 9,
                title: "워크샵 by 배스킨라빈스 그랜드 오픈",
                date: "상시 운영",
                img: "../event/ev8.png",
                content: "프로모션"
            },
            {
                id: 10,
                title: "유독Pick 구독하고 배스킨라빈스 4,000원 할인 받기!",
                date: "2024-01-29 ~ 2024-12-31",
                img: "../event/ev8-1.jpg",
                content: "제휴혜택"
            },
            {
                id: 11,
                title: "이제 배라에서도 애플페이",
                date: "상시 운영",
                img: "../event/ev8-2.png",
                content: "제휴혜택"
            },
            {
                id: 12,
                title: "해피앱에서 5% 적립 놓치지 마세요!",
                date: "상시 운영",
                img: "../event/ev9-1.png",
                content: "제휴혜택"
            },
            {
                id: 13,
                title: "2024 KT 멤버십 배스킨라빈스 특별한 제휴 혜택!",
                date: "상시 운영",
                img: "../event/ev9-2.png",
                content: "제휴혜택"
            },
            {
                id: 14,
                title: "T멤버십 회원 대상 싱글레귤러 최대 50%할인 또는 적립",
                date: "상시 운영",
                img: "../event/ev9-3.jpg",
                content: "제휴혜택"
            },
            {
                id: 15,
                title: "현대카드 M포인트 50% 사용",
                date: "상시 운영",
                img: "../event/ev9-4.png",
                content: "제휴혜택"
            },
            {
                id: 16,
                title: "1회용 컵 사용 줄이기 안내",
                date: "상시 운영",
                img: "../event/ev9.png",
                content: "프로모션"
            }
        ],
        프로모션: [
            {
                id: 1,
                title: "우석이 디지털 굿즈 4차",
                date: "2024.09.25 ~ 2024.10.01",
                img: "../event/ev1.png",
                content: "온라인 이벤트"
            },
            {
                id: 2,
                title: "스윗 테라피",
                date: "2024.09.26 ~ 2024.09.30",
                img: "../event/ev2.png",
                content: "프로모션"
            },
            {
                id: 3,
                title: "지금 배라에서 우석이 포근 블랭킷을 만나보세요!",
                date: "2024.09.25 ~ 소진 시까지",
                img: "../event/ev3.png",
                content: "프로모션"
            },
            {
                id: 4,
                title: "쿼터 이상 구매 시,우석이 포토카드 SET 600원",
                date: "2024-09-13 ~ 소진 시까지",
                img: "../event/ev4.png",
                content: "프로모션"
            },
            {
                id: 5,
                title: "우석이와 배라샷, 우석이 등신대 인증샷 이벤트",
                date: "2024-09-23 ~ 2024-10-30",
                img: "../event/ev5.png",
                content: "프로모션"
            },
            {
                id: 6,
                title: "9월 이달의 맛, 인스타그램에 사진을 올려주세요!",
                date: "2024-09-01 ~ 2024-09-26",
                img: "../event/ev6.jpg",
                content: "프로모션"
            },
            {
                id: 7,
                title: "우석이 등신대 인증샷 EVENT",
                date: "2024-08-30 ~ 2024-09-30",
                img: "../event/ev7.png",
                content: "프로모션"
            },
            {
                id: 8,
                title: "워크샵 by 배스킨라빈스 그랜드 오픈",
                date: "상시 운영",
                img: "../event/ev8.png",
                content: "프로모션"
            },
            {
                id: 9,
                title: "1회용 컵 사용 줄이기 안내",
                date: "상시 운영",
                img: "../event/ev9.png",
                content: "프로모션"
            },
        ],
        제휴혜택 : [
            {
                id: 8,
                title: "LG U+ 멤버십 배스킨라빈스 특별한 제휴 혜택!",
                date: "2024-03-01 ~ 2024-12-31",
                img: "../event/ev7-1.jpg",
                content: "제휴혜택"
            },

            {
                id: 10,
                title: "유독Pick 구독하고 배스킨라빈스 4,000원 할인 받기!",
                date: "2024-01-29 ~ 2024-12-31",
                img: "../event/ev8-1.jpg",
                content: "제휴혜택"
            },

            {
                id: 11,
                title: "이제 배라에서도 애플페이",
                date: "상시 운영",
                img: "../event/ev8-2.png",
                content: "제휴혜택"
            },
            {
                id: 12,
                title: "해피앱에서 5% 적립 놓치지 마세요!",
                date: "상시 운영",
                img: "../event/ev9-1.png",
                content: "제휴혜택"
            },
            {
                id: 13,
                title: "2024 KT 멤버십 배스킨라빈스 특별한 제휴 혜택!",
                date: "상시 운영",
                img: "../event/ev9-2.png",
                content: "제휴혜택"
            },
            {
                id: 14,
                title: "T멤버십 회원 대상 싱글레귤러 최대 50%할인 또는 적립",
                date: "상시 운영",
                img: "../event/ev9-3.jpg",
                content: "제휴혜택"
            },
            {
                id: 15,
                title: "현대카드 M포인트 50% 사용",
                date: "상시 운영",
                img: "../event/ev9-4.png",
                content: "제휴혜택"
            },
        ]
    };

    return (
        <div className="content">
            <h1 className="logo-font">Event</h1>
            <h5 className={'introduce-font'}>배스킨라빈스와 함께 해피포인트앱/오프라인 매장에서 진행하는<br/>다양한 이벤트를 확인해보세요</h5>

            {/* 메뉴 탭 */}
            <div className="menu-tabs">
                <div
                    className={`menu-tab ${selectedTab === "전체" ? "active" : "inactive"}`}
                    onClick={() => setSelectedTab("전체")}
                >
                    전체
                </div>
                <div
                    className={`menu-tab ${selectedTab === "프로모션" ? "active" : "inactive"}`}
                    onClick={() => setSelectedTab("프로모션")}
                >
                    프로모션
                </div>
                <div
                    className={`menu-tab ${selectedTab === "제휴혜택" ? "active" : "inactive"}`}
                    onClick={() => setSelectedTab("제휴혜택")}
                >
                    제휴혜택
                </div>
            </div>

            {/* 이벤트 목록 */}
            <div className={'border-top menu-border'}>
                <div className="event-grid">
                    {events[selectedTab].map((event) => (
                        <div key={event.id} className="event-card">
                            <img src={event.img} alt={event.title} className="event-img" />
                            <div className="event-details">
                                <h6>{event.content}</h6>
                                <h4>{event.title}</h4>
                                <p>{event.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Event;

