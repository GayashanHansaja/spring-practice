package org.example;
import java.util.LinkedList;
public class Linkedlist {
 public static void main(String[] args) {
     LinkedList<Integer> list = new LinkedList<>();

     list.add(1);
     list.add(2);
     list.add(3);
     list.addFirst(0);
     list.addLast(4);

     list.removeFirst();

     System.out.println(list);
 }
}
