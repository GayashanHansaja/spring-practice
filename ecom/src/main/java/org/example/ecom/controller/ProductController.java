package org.example.ecom.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ProductController {

    @RequestMapping ("/products")
    public String getProducts() {
        return "List of products";
    }
}
