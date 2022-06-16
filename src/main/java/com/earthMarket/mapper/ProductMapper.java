package com.earthMarket.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface ProductMapper {
	
	//대분류 가져오기
	public List<Map<String, Object>> getProduct1stCategory();

	//상품등록
	public int productInsert(Map<String, String> paramMap);
}
