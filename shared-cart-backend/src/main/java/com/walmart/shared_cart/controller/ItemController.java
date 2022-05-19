package com.walmart.shared_cart.controller;

import com.walmart.shared_cart.model.Item;
import com.walmart.shared_cart.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/item")
public class ItemController {
    @Autowired
    ItemService itemService;

    @GetMapping
    public Collection<Item> getAllItems() {return itemService.getAllItems();}

    @GetMapping("/{id}")
    public Item getItemById(@PathVariable int id) {return itemService.getItemById(id);}

    @PostMapping("/add")
    public Item addItems(@RequestBody Item item) {return itemService.addItem(item);}

    @DeleteMapping("/delete/{id}")
    public Item removeItem(@PathVariable int id) {
        return itemService.deleteItem(id);
    }


}