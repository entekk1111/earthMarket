package com.earthMarket.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface ProductMapper {
	
	public int addProduct(Map<String, String> paramMap);
}
