package com.walmart.shared_cart.dao;

import com.walmart.shared_cart.model.SharedCart;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

@Repository
public class SharedCartDAO {
    Map<String, SharedCart> sharedCartMap = new HashMap<>();

    public SharedCart getById(String url) {
        return sharedCartMap.get(url);
    }

    public Collection<SharedCart> getAll() {
        return sharedCartMap.values();
    }

    public SharedCart addSharedCartDetails(String uniqueUrl, SharedCart sharedCart) {
        return sharedCartMap.put(uniqueUrl, sharedCart);
    }
}