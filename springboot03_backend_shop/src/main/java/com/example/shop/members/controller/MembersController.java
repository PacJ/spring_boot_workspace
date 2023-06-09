package com.example.shop.members.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.shop.board.dto.BoardDTO;
import com.example.shop.members.dto.AuthInfo;
import com.example.shop.members.dto.MembersDTO;
import com.example.shop.members.service.MembersService;


@CrossOrigin("*")
@RestController
public class MembersController {

	@Autowired
	private MembersService membersService;
	
	@Autowired
	private BCryptPasswordEncoder encodePassword;
	
	public MembersController() {

	}
	
	//회원가입 폼
//		@RequestMapping(value="/member/signup.do", method=RequestMethod.GET)
//		public ModelAndView addMember(ModelAndView mav) {
//			mav.setViewName("member/signup");
//			return mav;
//		}
	
	/*
	 * jwt를 이용한 회원가입 처리(이제 세션 못쓴다)
	 * 
	 */
	
	//회원가입 처리
	@PostMapping("/member/signup")
	public String addMember(@RequestBody MembersDTO membersDTO) {
		// 비밀번호 암호화
		membersDTO.setMemberPass(encodePassword.encode(membersDTO.getMemberPass()));
		AuthInfo authInfo = membersService.addMemberProcess(membersDTO);
		return "redirect:/home.do";
	}
	
	//회원정보 가져오기
	@GetMapping("member/editInfo/{memberEmail}")
	public MembersDTO getMember(@PathVariable("memberEmail") String memberEmail) {
		return membersService.updateMembersProcess(memberEmail);
	}
	
	//정보 수정
	@PostMapping("/member/update")
	public void updateMember(@RequestBody MembersDTO membersDTO) {
		membersDTO.setMemberPass(encodePassword.encode(membersDTO.getMemberPass()));
		membersService.updateMemberProcess(membersDTO);
	}
	//  dto. get 해서 메일 이름 전화번호 비밀번호 프린트찍어서 확인
	// 비밀번호를 변경해야 그 인코딩하는 특수문자섞는걸로
	//set 으로 비밀번호 인코딩한걸로 바꿔주고
	//그대로 대입하면끝
	
	
	
	//로그아웃
//		@RequestMapping(value="/member/logout.do")
//		public String logoutMember(HttpSession session) {
//			session.invalidate();
//			return "redirect:/home.do";
//		}
//		
//		//로그인 폼
//		@RequestMapping(value="/member/login.do", method=RequestMethod.GET)
//		public String loginMember() {
//			return "member/login";
//		}
//		
//		
//		//회원정보 수정 폼
//		@RequestMapping(value="member/editmember.do", method=RequestMethod.GET)
//		public ModelAndView updateMember(ModelAndView mav, HttpSession session) {
//			AuthInfo authInfo = (AuthInfo)session.getAttribute("authInfo");
//			mav.addObject("membersDTO", membersService.updateMembersProcess(authInfo.getMemberEmail()));
//			mav.setViewName("member/editmember");
//			return mav;
//		}
//		
//		//회원정보 수정 처리
//		@RequestMapping(value="member/editmember.do", method=RequestMethod.POST)
//		public String updateMember(MembersDTO membersDTO, HttpSession session) {
//			AuthInfo authInfo = membersService.updateMemberProcess(membersDTO);
//			session.setAttribute("authInfo", authInfo);
//			
//			return "redirect:/home.do";
//		}
//		
//		@RequestMapping(value="member/changepass.do", method=RequestMethod.GET)
//		public String changePassword() {
//			return "member/changepass";
//		}
//		
//		@RequestMapping(value="member/changepass.do", method=RequestMethod.POST)
//		public String changePassword(ChangePwdCommand changePass, HttpSession session) {
//			AuthInfo authInfo = (AuthInfo)session.getAttribute("authInfo");
//			try {
//				membersService.updatePassProcess(authInfo.getMemberEmail(), changePass);
//				return "redirect:/home.do";
//			} catch(WrongEmailPasswordException e) {
//				return "member/changepass";
//			}
//		}
		
}//end class
