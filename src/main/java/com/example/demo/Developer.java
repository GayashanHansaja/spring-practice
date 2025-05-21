package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class Developer {

    // field injection
    @Autowired
    @Qualifier("vscode")// if ude qualifier mention with name of object
    private Ide ide;

    // constructor injection
/*    public Developer(Vscode vscode){
        this.vscode = vscode;
    }*/

    // setter injection
/*    @Autowired
    public void setVscode(Vscode vscode){
        this.vscode = vscode;
    }*/

    // now there are two type of beans with same interface.so to over come that we have to prioratize one with @primary or @qualifier

    public void build(){
        ide.code();
        System.out.println("Building app");
    }
}
