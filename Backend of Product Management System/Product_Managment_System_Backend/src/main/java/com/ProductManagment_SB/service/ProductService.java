package com.ProductManagment_SB.service;

import java.util.List;

import com.ProductManagment_SB.model.Product;

public interface ProductService {

	public Product saveProduct(Product product); //for save the product
	
	public List<Product> getAllProduct(); //get all product list
	
	public Product getProductById(Integer id); //get product by id format
	
	public String deleteProduct(Integer id); //delete product
	
	public Product editProduct(Product product, Integer id);//edit data using by id 
	
}
