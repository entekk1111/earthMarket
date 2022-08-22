package com.earthMarket.controller;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.earthMarket.service.LoginService;

@Controller
public class LoginController {
	
	@Autowired
	LoginService service;
	
	@PostMapping(value= "/api/join")
	@ResponseBody
	public HashMap<String, Object> joinAction(@RequestBody HashMap<String, Object> map){
		HashMap<String, Object> resultMap = new HashMap<>();
		if(map != null) {
			int dupCheck = service.getMemberId(map);
			if(dupCheck != 0) {
				resultMap.put("isSuccess", false);
				resultMap.put("errorMsg", "ID_DUP");
			}else {
				int insertResult = service.addNewMember(map);
				if(insertResult != 1) {
					resultMap.put("isSuccess", false);
					resultMap.put("errorMsg", "INSERT_FAIL");
				}else {
					resultMap.put("isSuccess", true);
				}
			}
		}
		return resultMap;
	}
}
