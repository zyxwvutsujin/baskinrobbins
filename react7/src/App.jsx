import './App.css'
import AxiosTest from "./conponents/AxiosTest.jsx";
import AxiosDailyBoxOffice from "./conponents/AxiosDailyBoxOffice.jsx";
import AxiosRestApiServerConn from "./conponents/AxiosRestApiServerConn.jsx";

function App() {


  return (
      <div className={'d-block mt-3 p-4 gap-4 rounded-3 border border-black border-opacity-10'}>
          <span className={'fs-3 bg-success bg-opacity-10 '}>1. Axios - get</span>
          <br/><br/>
          <AxiosTest/>

          <hr/>
          <span className={'fs-3 bg-danger bg-opacity-10'}>2. Axios 데이터 가져오기</span>
          <AxiosDailyBoxOffice/>

          <hr/>
          <span className={'fs-3 bg-warning bg-opacity-10'}>3. 스프링과 리액트 서버 연결</span>
          <AxiosRestApiServerConn/>


      </div>
  )
}

export default App
