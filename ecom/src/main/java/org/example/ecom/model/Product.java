package org.example.ecom.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    private int id;
    private String name;
    private String description;
    private String brand;
    private int price;
    private String category;
    private Date releaseDate;
    private boolean available;
    private int quantity;
    private String imageUrl;

}
