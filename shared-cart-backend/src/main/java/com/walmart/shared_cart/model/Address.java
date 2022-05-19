package com.walmart.shared_cart.model;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class Address {

    private long addressId;

    private long userId;

    private String houseNumber;

    private String streetName;

    private String city;

    private String state;

    private String country;

    private int zipCode;
}