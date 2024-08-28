import axios from "axios";
import {useState} from "react";

function AxiosDailyBoxOffice() {
    // state 선언, 초기값은 빈 배열
    const [dailyBoxOfficeList, setDailyBoxOfficeList] = useState([]);  // 상태 변수 정의

    // 이벤트 처리함수 선언
    const getKobisData2 = () => {
        // axios를 사용하여 영화진흥원 openApi 데이터 요청
        axios.get("https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20240827")
            .then(res => {
                console.log('비동기 통신 성공');

                // 한번에 가져오기
                const { dailyBoxOfficeList } = res.data.boxOfficeResult;

                // state로 관리하는 데이터를 한번에 저장
                setDailyBoxOfficeList(dailyBoxOfficeList);  // 상태 업데이트
            })
            .catch(err => {
                console.log('비동기 통신 중 오류 발생');
                console.log(err);
            });
    }

    return(
        <div className={"mt-3"}>
            <div className={"row"}>
                <div className={'col-sm mx-auto'}>
                    <table className={'table table-hover table-striped'}>
                        <colgroup>
                            <col width={'10%'}/>
                            <col width={'40%'}/>
                            <col width={'15%'}/>
                            <col width={'20%'}/>
                            <col width={'15%'}/>
                        </colgroup>
                        <thead>
                        <tr>
                            <th>순위</th>
                            <th>제목</th>
                            <th>개봉일</th>
                            <th>당일 관람객</th>
                            <th>누적 관람객</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            // state에 저장 된 데이터를 map() 함수를 사용하여 출력
                            // 컴포넌트가 처음 렌더링 될 경우에는 boxOfficeList 배열이 빈 배열이기 때문에 화면에 출력되는 내용이 없음
                            dailyBoxOfficeList.map((movie, index) => (
                                <tr key={index}>
                                    <td>{movie.rank}</td>
                                    <td>{movie.movieNm}</td>
                                    <td>{movie.openDt}</td>
                                    <td>{movie.audiCnt}</td>
                                    <td>{movie.audiAcc}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                    <div className={'mt-3 d-flex justify-content-end'}>
                        <button type={'button'} className={'btn btn-danger opacity-25'} onClick={getKobisData2}>일일 영화 순위 조회</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AxiosDailyBoxOffice;
