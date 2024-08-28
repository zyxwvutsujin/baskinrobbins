import BoardList from "./BoardList.jsx";
import {useState} from "react";


function Board() {
    const [viewState, setViewState] = useState('list');

    let view = <BoardList/>;

    const getBoardList = () => {
        view = <BoardList/>
        setViewState('list');
    }

    return(
        <div className={'container mt-5'}>
            <div className={'mt-3'}>
                <button type={'button'} className={'btn btn-success opacity-25 me-2'} onClick={getBoardList}>게시글 목록 화면</button>
                <button type={'button'} className={'btn btn-success opacity-25 me-2'}>게시글 상세 화면</button>
                <button type={'button'} className={'btn btn-success opacity-25 me-2'}>게시글 글쓰기 화면</button>
            </div>
            {view}
        </div>
    )
}

export default Board;