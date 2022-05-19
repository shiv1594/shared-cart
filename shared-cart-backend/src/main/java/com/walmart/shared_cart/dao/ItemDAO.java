package com.walmart.shared_cart.dao;

import com.walmart.shared_cart.model.Item;
import org.apache.commons.lang.RandomStringUtils;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import java.util.*;

@Repository
public class ItemDAO {

    Map<Integer, Item> itemMap;
    int itemId;


    @PostConstruct
    public void postConstruct() {
        this.itemMap = new HashMap<>();
        this.itemId = 100;
        this.itemMap.put(itemId, new Item(itemId,"Fresh Cucumber", 7.8, "Good for summers", 1));
        this.itemId++;
        this.itemMap.put(itemId, new Item(itemId,"Better Homes & Gardens Tufted Trellis Decorative Square Pillow", 20.35, "20\" x 20\", Grey, Single Pack", 1));
        this.itemId++;
        this.itemMap.put(itemId, new Item(itemId,"Cotton Window Curtain", 33.98, "Gap Home Semi- Sheer Stripe Organic Cotton Window Curtain Pair Off-White", 1));
        this.itemId++;
        this.itemMap.put(itemId, new Item(itemId," Coca-Cola", 11.76, "Original Soda Pop, 12 Fl Oz, 24 Pack Cans", 1));
        this.itemId++;
        this.itemMap.put(itemId, new Item(itemId,"Dishwasher Detergent", 18.67, "Cascade Pacs, Fresh Scent, 0.56 Ounce, 62 Count", 1));
    }

    public Collection<Item> getAllItems() {
        return itemMap.values();
    }

    public Item getItemById(int id) {
        return itemMap.get(id);
    }

    public Item addItem(Item item) {
        itemId++;
        item.setId(itemId);
        this.itemMap.put(itemId, item);
        return itemMap.get(itemId);
    }

    public Item deleteItem(int id) {
        Item item;
        if (!itemMap.containsKey(id)) {
            throw new RuntimeException("Unable to find the item to be deleted");
        }
        item = itemMap.get(id);
        itemMap.remove(id);
        this.itemId--;
        return item;
    }

}