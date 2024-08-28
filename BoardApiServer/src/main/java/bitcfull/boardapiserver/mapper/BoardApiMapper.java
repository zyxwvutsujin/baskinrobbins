package bitcfull.boardapiserver.mapper;

import bitcfull.boardapiserver.dto.BoardDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface BoardApiMapper {
    List<BoardDTO> selectBoardList();
}
