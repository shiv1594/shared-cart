package com.walmart.shared_cart.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Generated;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
public class Item {

    int id;

    private String productName;

    private double price;

    private String description;

    private int itemCount;
}