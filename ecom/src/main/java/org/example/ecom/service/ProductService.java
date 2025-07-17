package org.example.ecom.service;

import org.example.ecom.model.Product;
import org.example.ecom.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    public List<Product> getAllProducts() {
        return productRepo.findAll();
    }

    public Product getProductById(int id) {
        return productRepo.findById((long) id).orElse(null);
    }

    public Product addProduct(Product product/*, MultipartFile image*/) {
        try {
            /*product.setImageName(image.getOriginalFilename());
            product.setImageType(image.getContentType());
            product.setImage(image.getBytes());*/
            return productRepo.save(product);
        } catch (Exception e) {
            throw new RuntimeException("Failed to save product: " + e.getMessage());
        }
    }


    public void deleteProduct(int id) {
        Product product = getProductById(id);
        if (product != null) {
            productRepo.delete(product);
        } else {
            throw new RuntimeException("Product not found with id: " + id);
        }
    }
}
