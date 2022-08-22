package com.earthMarket.mapper;

import java.util.HashMap;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LoginMapper {
	
	public int getMemberId(HashMap<String, Object> map);
	
	public int addNewMember(HashMap<String, Object> map);
}
