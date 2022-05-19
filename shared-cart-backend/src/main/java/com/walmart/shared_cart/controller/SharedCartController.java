package com.walmart.shared_cart.controller;

import com.walmart.shared_cart.dto.CreateSharedCartDto;
import com.walmart.shared_cart.model.Address;
import com.walmart.shared_cart.model.Item;
import com.walmart.shared_cart.model.SharedCart;
import com.walmart.shared_cart.model.User;
import com.walmart.shared_cart.service.ItemService;
import com.walmart.shared_cart.service.SharedCartService;
import com.walmart.shared_cart.service.UserService;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/sharedCart")
@CrossOrigin(origins = "http://localhost:3000")
public class SharedCartController {

    @Autowired
    private SharedCartService sharedCartService;

    @Autowired
    private UserService userService;

    @Autowired
    private ItemService itemService;

    @GetMapping("/all")
    public Collection<SharedCart> getAllSharedCarts() {
        return sharedCartService.getAllSharedCarts();
    }

    @GetMapping("/{url}")
    public SharedCart getSharedCartDetails(@PathVariable String url) {
        return sharedCartService.getSharedCartDetails(url);
    }

    @GetMapping("/user/{userId}")
    public Collection<SharedCart> getUsersSharedCarts(@PathVariable Long userId) {
        List<SharedCart> userShareCarts = new ArrayList<>();
        Collection<SharedCart> allSharedCarts = sharedCartService.getAllSharedCarts();
        for (SharedCart cart : allSharedCarts) {
            for (User member : cart.getCartMembers()) {
                if (member.getUserId().equals(userId)) {
                    userShareCarts.add(cart);
                    break;
                }
            }
        }
        return userShareCarts;
    }

    @GetMapping("/{cartUrl}/total")
    public double getSharedCartTotal(@PathVariable String cartUrl) {
        return sharedCartService.getSharedCartTotal(cartUrl);
    }

    @PostMapping("/{userId}/create")
    public String createSharedCart(@PathVariable Long userId, @RequestBody CreateSharedCartDto dto) {
        User user = userService.getUser(userId);
        Item item = itemService.getItemById(dto.getItemId());
        if (user == null || item == null) {
            return "ERROR";
        }
        return sharedCartService.createSharedCart(user, item, dto.getCartName());
    }

    @PostMapping("/{cartUrl}/{userId}/add")
    public SharedCart addUserToCart(@PathVariable String cartUrl, @PathVariable Long userId) {
        User user = userService.getUser(userId);
        if (user == null) {
            return sharedCartService.getSharedCartDetails(cartUrl);
        }
        return sharedCartService.addUser(cartUrl, user);
    }


    @DeleteMapping("/{cartUrl}/{userId}/delete")
    public SharedCart deleteUserFromCart(@PathVariable String cartUrl, @PathVariable Long userId) {
        User user = userService.getUser(userId);
        if (user == null) {
            return sharedCartService.getSharedCartDetails(cartUrl);
        }
        return sharedCartService.deleteUser(cartUrl, user);
    }

    @PostMapping("/{cartUrl}/{userId}/checkout")
    public void continueToCheckout(@PathVariable String cartUrl, @PathVariable Long userId) {
        //This is invoked by current user after shared cart has been locked. This will call existing walmart API
    }

    @PostMapping("/{cartUrl}/placeOrder")
    public void placeOrder(@PathVariable String cartUrl) {
        //This is enabled when all users have paid their dues for the individual orders. Any of the user can click on this and place the order.
        //This will call existing walmart API
    }

}