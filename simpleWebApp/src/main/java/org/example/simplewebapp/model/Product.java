package org.example.simplewebapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Product {

    @Id
    private int id;
    private String name;
    private int price;

    public Product() {

    }
}
