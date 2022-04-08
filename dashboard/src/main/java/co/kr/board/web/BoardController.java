package co.kr.board.web;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import co.kr.board.service.BoardService;

@Controller
public class BoardController {
	
	@Resource(name="boardService")
	private BoardService boardService;
	
	@RequestMapping(value = "/main.do")
	public String mainPage(){
		return "/board/main";
	}
	
	@RequestMapping(value = "/chart.do" , method = RequestMethod.POST)
	public ModelAndView chart(Model model, @RequestParam HashMap<String, Object>param){
		ModelAndView json = new ModelAndView("jsonView");

		List<HashMap<String, Object>> chartPage = boardService.selectChart();
		json.addObject("data", chartPage);
	
		return json;
	}
	
	@RequestMapping(value = "/selectList.do", method = RequestMethod.POST)
	public ModelAndView selectList(@RequestParam HashMap<String, Object>param){
		ModelAndView json = new ModelAndView("jsonView");
		
		List<HashMap<String, Object>> selectList = boardService.selectChart();
		json.addObject("selectList", selectList);
		
		return json;
	}
}