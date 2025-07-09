package org.example.simplewebapp.service;

import org.example.simplewebapp.model.Product;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    List<Product> products = new ArrayList<>();{
        products.add(new Product(1, "Laptop", 1000));
        products.add(new Product(2, "Smartphone", 500));
        products.add(new Product(3, "Tablet", 300));
        products.add(new Product(4, "Smartwatch", 200));
        products.add(new Product(5, "Headphones", 150));
    }

    public List<Product> getProducts() {
        return products;
    }

    public Product getProductById(int id) {
        for (Product product : products) {
            if (product.getId() == id) {
                return product;
            }
        }
        return null; // or throw an exception if not found
        /* Alternatively, you can use Java Streams:
        return products.stream()
                .filter(p -> p.getId() == id)
                .findFirst()
                .orElse(null); // or throw an exception if not found
        */
    }

    public void addProduct(Product product) {
        if(product != null ){
            products.add(product);
        } else {
            throw new IllegalArgumentException("Product cannot be null");
        }
    }

    public void deleteProduct(int id) {
        for (int i = 0; i < products.size(); i++) {
            if (products.get(i).getId() == id) {
                products.remove(i);
                break;
            }
            }
        }

    public void updateProduct(int id, Product product) {
        for (int i = 0; i < products.size(); i++) {
            if (products.get(i).getId() == id) {
                products.set(i, product);
                return;
            }
        }
        throw new IllegalArgumentException("Product with id " + id + " not found");

    }
}
