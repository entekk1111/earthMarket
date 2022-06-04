package com.earthMarket.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.earthMarket.mapper.ProductMapper;
import com.earthMarket.vo.ProductVO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductService {
	
	@Autowired
	ProductMapper productMapper;
	
	public List<ProductVO> getProductList() {
		List<ProductVO> list = new ArrayList<ProductVO>();
		
		//임시데이터
		for(int i = 1; i < 41; i++) {
			ProductVO pv = new ProductVO();
			pv.setNum(i);
			pv.setPhoto("sample01.jpg");
			pv.setTag("달콤팜" + i);
			pv.setTit("새콤달콤 설향딸기" + i);
			pv.setPrice("42,000");
			list.add(pv);
		}
		
		return list; 
	}
	
	public int addProduct(Map<String, Object> paramMap) {
//		productMapper.addProduct(paramMap);
		return 0; 
	}
}
