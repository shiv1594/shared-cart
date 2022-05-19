package com.walmart.shared_cart.model;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Data
@AllArgsConstructor
public class UserSharedCart {
    private String cartUrl;

    private String cartName;

    private User user;

    List<String> memberNames;

    private double cartTotal;

    private int zipcode;

    private int totalMembers;

    public int getTotalMembers() {
        return memberNames.size();
    }
}
