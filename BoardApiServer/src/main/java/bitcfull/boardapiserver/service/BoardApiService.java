package bitcfull.boardapiserver.service;

import bitcfull.boardapiserver.dto.BoardDTO;

import java.util.List;

public interface BoardApiService {
    List<BoardDTO> selectBoardList();
}
