package org.example;

import java.util.HashMap;

class Hashmap {
    public static void main(String[] args) {
        HashMap<Integer, String> hmap = new HashMap<>();

        hmap.put(1, "one");
        hmap.put(2, "two");
        hmap.put(3, "three");
        hmap.put(4, "four");
        hmap.put(5, "five");

        System.out.println(hmap.containsKey(4));//check if key 4 exists

        hmap.remove(1);//remove key 1

        hmap.put(4, "hatara");

        hmap.replace(4, "four");//if key 4 exist it will replcae the value

        hmap.putIfAbsent(4, "hatha");//if key 4 does not exist it will add the value, if exist do othing
        System.out.println(hmap.get(4));

        for (int keys : hmap.keySet()){
            System.out.println("Key: " + keys + ", Value: " + hmap.get(keys));
        }
    }
}