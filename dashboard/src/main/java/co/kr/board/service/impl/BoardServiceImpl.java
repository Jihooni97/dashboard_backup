package co.kr.board.service.impl;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import co.kr.board.service.BoardService;

@Service("boardService")
public class BoardServiceImpl implements BoardService {
	
	@Resource(name="boardMapper")
	private BoardMapper boardMapper;

	@Override
	public List<HashMap<String, Object>> selectChart() {
		return boardMapper.selectChart();
	}

	@Override
	public List<HashMap<String, Object>> selectList() {

		return boardMapper.selectList();
	}

	@Override
	public int count(HashMap<String, Object> param) {
		return boardMapper.count(param);
	}

	@Override
	public List<HashMap<String, Object>> paging(int offset) {
		HashMap<String, Object>page = new HashMap<>();
		page.put("offset", offset);
		return boardMapper.selectList(page);
	}

}
