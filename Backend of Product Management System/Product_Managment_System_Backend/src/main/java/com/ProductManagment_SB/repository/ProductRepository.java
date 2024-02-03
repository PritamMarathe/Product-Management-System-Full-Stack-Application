package com.ProductManagment_SB.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ProductManagment_SB.model.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

	
}
