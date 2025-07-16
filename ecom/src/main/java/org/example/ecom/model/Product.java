package org.example.ecom.model;

import jakarta.persistence.*;
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
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String description;
    private String brand;
    private int price;
    private String category;
    private Date releaseDate;
    private boolean available;
    private int quantity;

/*    private String imageName;
    private String imageType;

    @Lob
    private byte[] image;*/

}
