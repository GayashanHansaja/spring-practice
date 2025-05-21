package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Developer {

    // field injection
    //@Autowired
    private Vscode vscode;

    // constructor injection
/*    public Developer(Vscode vscode){
        this.vscode = vscode;
    }*/

    // setter injection
    @Autowired
    public void setVscode(Vscode vscode){
        this.vscode = vscode;
    }

    public void build(){
        vscode.code();
        System.out.println("Building app");
    }
}
