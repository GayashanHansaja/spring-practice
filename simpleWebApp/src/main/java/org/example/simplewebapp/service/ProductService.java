package org.example.simplewebapp.service;

import org.example.simplewebapp.model.Product;
import org.example.simplewebapp.repository.productRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    private productRepository productRepository;

    //Comment because now we move to database connection
/*    List<Product> products = new ArrayList<>();{
        products.add(new Product(1, "Laptop", 1000));
        products.add(new Product(2, "Smartphone", 500));
        products.add(new Product(3, "Tablet", 300));
        products.add(new Product(4, "Smartwatch", 200));
        products.add(new Product(5, "Headphones", 150));
    }*/


    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    public Product getProductById(int id) {
/*        for (Product product : products) {
            if (product.getId() == id) {
                return product;
            }
        }
        return null;*/
        return productRepository. findById(id).get();
    }

    public void addProduct(Product product) {
/*        if(product != null ){
            products.add(product);
        } else {
            throw new IllegalArgumentException("Product cannot be null");
        }*/
        if (product != null) {
            productRepository.save(product);
        } else {
            throw new IllegalArgumentException("Product cannot be null");
        }
    }

    public void deleteProduct(int id) {
        /*for (int i = 0; i < products.size(); i++) {
            if (products.get(i).getId() == id) {
                products.remove(i);
                break;
            }
            }*/
        if (productRepository.existsById(id)) {
            productRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Product with id " + id + " not found");
        }
        }

    public void updateProduct(int id, Product product) {
/*        for (int i = 0; i < products.size(); i++) {
            if (products.get(i).getId() == id) {
                products.set(i, product);
                return;
            }
        }
        throw new IllegalArgumentException("Product with id " + id + " not found");*/
        if (productRepository.existsById(id)) {
            productRepository.save(product);
        } else {
            throw new IllegalArgumentException("Product with id " + id + " not found");
        }

    }
}
