package com.ProductManagment_SB.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ProductManagment_SB.model.Product;
import com.ProductManagment_SB.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService{

	@Autowired
	private ProductRepository productRepo;
	
	@Override
	public Product saveProduct(Product product) {
		return productRepo.save(product);
	}

	@Override
	public List<Product> getAllProduct() {
		return productRepo.findAll() ;
	}

	@Override
	public Product getProductById(Integer id) {
		return productRepo.findById(id).get();
	}

	@Override
	public String deleteProduct(Integer id) {
		Product product=productRepo.findById(id).get(); //fetch the prod using id
		
		if(product != null) { 	//if prod is present in db then delete prod
			productRepo.delete(product); 
			return "Product Delete Successfully";
		}
		return "Something wrong on Server";	// otherwise return this msg
	}

	@Override
	public Product editProduct(Product p, Integer id) { 
		Product oldProduct=productRepo.findById(id).get(); //fatch the old data using the id & replce 1 by 1
		oldProduct.setProductName(p.getProductName()); //set prod name & then get name
		oldProduct.setDescription(p.getDescription()); //set prod Description & then get description
		oldProduct.setPrice(p.getPrice());//set prod price & then get price
		oldProduct.setStatus(p.getStatus());//set prod status & then get status
		
		return productRepo.save(oldProduct); //save the prod
	}

}
