/**
 ���� : ��ǰ���
 ���� : ��ǰ��� ������
 �̸� : ��ٹ�
 �̷� : 2022-05-21 ���� ����
**/
package com.earthMarket.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.earthMarket.service.ProductService;
import com.earthMarket.vo.ProductVO;

@RestController
@RequestMapping("/api/product")
public class ProductController {
	
	@Autowired
	ProductService productService;
	
	/**
	 * @todo 상품목록 가져오기
	 * @return List<ProductVO>
	 * */
	@ResponseBody
	@GetMapping("/getList")
	public List<ProductVO> getProductList() {
		return productService.getProductList();
	}
	
}
