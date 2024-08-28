package bitcfull.boardapiserver.service;

import bitcfull.boardapiserver.dto.BoardDTO;
import bitcfull.boardapiserver.mapper.BoardApiMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BoardApiServiceImpl implements BoardApiService {
    @Autowired
    private BoardApiMapper boardApiMapper;

    @Override
    public List<BoardDTO> selectBoardList() {
        return boardApiMapper.selectBoardList();
    }
}
