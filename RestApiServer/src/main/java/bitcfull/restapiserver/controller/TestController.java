package bitcfull.restapiserver.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping
public class TestController {
    // CORS를 허용해주면 local:5173에서도 local:8080 비동기 통신 가능함
// CORS (Cross-Origin Resource Sharing) : 다른 출처의 자원을 공유하여 사용하는 것
// CORS 오류는 웹 브라우저에서 발생하는 오류
// CORS 허용 하는 법 : @CrossOrigin(origins = "허용할 서버 주소")
//@CrossOrigin(origins = "http://localhost:5173")
//    @CrossOrigin(origins = "http://localhost:5173")
    @RequestMapping("/test")
    public String index() throws Exception{
        return "Axios TestController 접속 성공";
    }
}
