package org.example.ecom.controller;

import org.example.ecom.model.Product;
import org.example.ecom.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService productService;

    @RequestMapping ("/products")
    public List<Product> getAllProducts(Product product){
        return productService.getAllProducts();
    }
}
