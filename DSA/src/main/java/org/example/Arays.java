package org.example;
import java.util.Arrays;

public class Arays {
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,5};

        System.out.println("Length of array :" + arr.length);
        System.out.println(arr[0]);

        arr[0]=10;
        System.out.println(arr[0]);

       /* for(int i=0; i<arr.length; i++){
            System.out.println("Element at index " + i + " is: " + arr[i]);
        }*/

        Arrays.sort(arr);// Sort the array

        int index = Arrays.binarySearch(arr,5);// Search for the element 5 in the sorted array

        System.out.println("Index is: " + index);

        //copy the array
        int[] arrcopy = Arrays.copyOf(arr, arr.length);

        Arrays.fill(arrcopy,0);// Fill the copied array with 0s

        // Enhanced for each loop to print elements
        for(int array : arr){
            System.out.println("Element is: " + array);
        }
        for(int array : arrcopy){
            System.out.println("Element is: " + array);
        }
    }
}
