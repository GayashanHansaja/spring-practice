package org.example.simplewebapp.service;

import org.example.simplewebapp.model.Product;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    List<Product> products = new ArrayList<>();{
        products.add(new Product("1", "Laptop", 1000));
        products.add(new Product("2", "Smartphone", 500));
        products.add(new Product("3", "Tablet", 300));
        products.add(new Product("4", "Smartwatch", 200));
        products.add(new Product("5", "Headphones", 150));
    }

    public List<Product> getProducts() {
        return products;
    }
}
