import axios from "axios";
import {useState} from "react";

function AxiosRestAPIServerConn() {
    const [sendData, setSendData] = useState('');
    const [getSendData, setGetSendData] = useState([]);
    const [getParamData, setGetParamData] = useState([]);
    const [postData, setPostData] = useState([]);
    const [putData, setPutData] = useState([]);
    const [deleteData, setDeleteData] = useState([]);

    const clickSendDataGetTest = () => {
        axios.get('/api/test')
            .then(res => {
                setSendData(res.data);
                console.log(res);
            })
            .catch(err=> {
                setSendData("Axios TestController 접속 실패");
                console.log(err);
            })
    }

    const clickSendDataGet = () => {
        axios.get('/api/async/sendDataGet')
            .then(res => {
                setGetSendData(res.data);
            })
            .catch(err=> {
                const getSendDataError = {
                    result: "error",
                    data: "axios 이용한 GET 방식 비동기 통신 실패"
                };
                setGetSendData(getSendDataError);
                console.log(err);
            })
    }

    const clickSendDataGetParam = () => {
        axios.get('/api/async/sendDataGetParam', {
            params: {
                idx: 100
            }
        })
            .then(res => {
                setGetParamData(res.data);
                console.log(res);
            })
            .catch(err=> {
                const getSendDataError = {
                    result: "error",
                    data: "axios 이용한 GET Param 방식 비동기 통신 실패"
                };
                setGetParamData(getSendDataError);
                console.log(err);
            })
    }

    const clickSendDataPostParam = () => {
        axios.post('http://localhost:8080/async/sendDataPost', null, {
            params: {
                userId: "test1",
                userPw: "1234"
            }
        })
            .then(res => {
                setPostData(res.data);
                console.log(res);
            })
            .catch(err=> {
                const getDataError = {
                    result: "error",
                    data: "axios 이용한 POST 방식 비동기 통신 실패"
                };
                setPostData(getDataError);
                console.log(err);
            })
    }
    const clickSendDataPutParam = () => {
        axios.put('http://localhost:8080/async/sendDataPut', null, {
            params: {
                idx: "100"
            }
        })
            .then(res => {
                setPutData(res.data);
                console.log(res);
            })
            .catch(err=> {
                const getDataError = {
                    result: "error",
                    data: "axios 이용한 PUT 방식 비동기 통신 실패"
                };
                setPutData(getDataError);
                console.log(err);
            })
    }
    const clickSendDataDeleteParam = () => {
        axios.delete('http://localhost:8080/async/sendDataDelete', {
            params: {
                idx: 450
            }
        })
            .then(res => {
                setDeleteData(res.data);
                console.log(res);
            })
            .catch(err=> {
                const getDataError = {
                    result: "error",
                    data: "axios 이용한 GET Param 방식 비동기 통신 실패"
                };
                setDeleteData(getDataError);
                console.log(err);
            })
    }
    return (
        <div className={'d-grid gap-2 p-3'}>
            <div className={'d-grid p-3 rounded-3 border'}>
                <div className={'row mb-2'}>
                    <span className={'col-sm-2'}>결과</span>
                    <span className={'col-sm'}>{sendData}</span>
                </div>
                <div className={'d-flex justify-content-end'}>
                    <button type={'button'} className={'btn btn-success opacity-25'} onClick={clickSendDataGetTest}>
                        RequestMapping Axios 접속
                    </button>
                </div>
            </div>
            <div className={'d-grid p-3 rounded-3 border'}>
                <div className={'row'}>
                    <span className={'col-sm-2'}>결과</span>
                    <span className={'col-sm'}>{getSendData.result}</span>
                </div>
                <div className={'row mb-2'}>
                    <span className={'col-sm-2'}>데이터</span>
                    <span className={'col-sm'}>{getSendData.data}</span>
                </div>
                <div className={'d-flex justify-content-end'}>
                    <button type={'button'} className={'btn btn-success opacity-25'} onClick={clickSendDataGet}>
                        Get 방식 사용
                    </button>
                </div>
            </div>
            <div className={'d-grid p-3 rounded-3 border'}>
                <div className={'row'}>
                    <span className={'col-sm-2'}>결과</span>
                    <span className={'col-sm'}>{getParamData.result}</span>
                </div>
                <div className={'row mb-2'}>
                    <span className={'col-sm-2'}>데이터</span>
                    <span className={'col-sm'}>{getParamData.data}</span>
                </div>
                <div className={'d-flex justify-content-end'}>
                    <button type={'button'} className={'btn btn-success opacity-25'} onClick={clickSendDataGetParam}>
                        Get 방식 파라미터 사용
                    </button>
                </div>
            </div>
            <div className={'d-grid p-3 rounded-3 border'}>
                <div className={'row'}>
                    <span className={'col-sm-2'}>결과</span>
                    <span className={'col-sm'}>{postData.result}</span>
                </div>
                <div className={'row mb-2'}>
                    <span className={'col-sm-2'}>데이터</span>
                    <span className={'col-sm'}>{postData.data}</span>
                </div>
                <div className={'d-flex justify-content-end'}>
                    <button type={'button'} className={'btn btn-success opacity-25'} onClick={clickSendDataPostParam}>
                        POST 방식 파라미터 사용
                    </button>
                </div>
            </div>
            <div className={'d-grid p-3 rounded-3 border'}>
                <div className={'row'}>
                    <span className={'col-sm-2'}>결과</span>
                    <span className={'col-sm'}>{putData.result}</span>
                </div>
                <div className={'row mb-2'}>
                    <span className={'col-sm-2'}>데이터</span>
                    <span className={'col-sm'}>{putData.data}</span>
                </div>
                <div className={'d-flex justify-content-end'}>
                    <button type={'button'} className={'btn btn-success opacity-25'} onClick={clickSendDataPutParam}>
                        PUT 방식 파라미터 사용
                    </button>
                </div>
            </div>
            <div className={'d-grid p-3 rounded-3 border'}>
                <div className={'row'}>
                    <span className={'col-sm-2'}>결과</span>
                    <span className={'col-sm'}>{deleteData.result}</span>
                </div>
                <div className={'row mb-2'}>
                    <span className={'col-sm-2'}>데이터</span>
                    <span className={'col-sm'}>{deleteData.data}</span>
                </div>
                <div className={'d-flex justify-content-end'}>
                    <button type={'button'} className={'btn btn-success opacity-25'} onClick={clickSendDataDeleteParam}>
                        DELETE 방식 파라미터 사용
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AxiosRestAPIServerConn;