package org.example;

import java.util.BitSet;

public class SimpleBloomFilter {
    private static final int SIZE = 100; // size of the bit array
    private static final int HASH_COUNT = 3; // number of hash functions
    private BitSet bitSet;

    public SimpleBloomFilter() {
        bitSet = new BitSet(SIZE);
    }

    // Simulate multiple hash functions
    private int[] getHashes(String value) {
        int[] hashes = new int[HASH_COUNT];
        for (int i = 0; i < HASH_COUNT; i++) {
            int hash = (value + i).hashCode(); // add 'i' as salt
            hash = Math.abs(hash % SIZE); // keep within bounds
            hashes[i] = hash;
        }
        return hashes;
    }

    // Add value to Bloom filter
    public void add(String value) {
        int[] hashes = getHashes(value);
        for (int hash : hashes) {
            bitSet.set(hash);
        }
    }

    // Check if value might be in filter
    public boolean mightContain(String value) {
        int[] hashes = getHashes(value);
        for (int hash : hashes) {
            if (!bitSet.get(hash)) {
                return false; // definitely not present
            }
        }
        return true; // might be present
    }

    // Main method to test
    public static void main(String[] args) {
        SimpleBloomFilter bloom = new SimpleBloomFilter();

        // Add some values
        bloom.add("apple");
        bloom.add("banana");
        bloom.add("cherry");

        // Check presence
        System.out.println("apple? " + bloom.mightContain("apple"));   // true
        System.out.println("banana? " + bloom.mightContain("banana")); // true
        System.out.println("grape? " + bloom.mightContain("grape"));   // false (probably)

        // Possible false positive        System.out.println("orange? " + bloom.mightContain("orange"));
        System.out.println("cherry? " + bloom.mightContain("cherry"));// might be true or false
    }
}
