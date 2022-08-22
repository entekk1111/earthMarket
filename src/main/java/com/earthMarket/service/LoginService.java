package com.earthMarket.service;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.earthMarket.mapper.LoginMapper;

@Service
public class LoginService {
	
	@Autowired
	LoginMapper mapper;
	
	public int getMemberId(HashMap<String, Object> map) {
		return mapper.getMemberId(map);
	}
	
	public int addNewMember(HashMap<String, Object> map) {
		return mapper.addNewMember(map);
	}
	
}
