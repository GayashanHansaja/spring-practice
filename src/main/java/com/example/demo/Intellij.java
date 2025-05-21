package com.example.demo;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;

@Component
//@Primary
public class Intellij implements Ide {

    public void code(){
        System.out.println("use vs Intellij");
    }
}
