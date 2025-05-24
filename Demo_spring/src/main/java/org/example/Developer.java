package org.example;


public class Developer {

    private int age = 30;
    //when need to take objec like another class,not like asigning varibale
    private Intellij intellij;

    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }

    public Intellij getIntellij() {
        return intellij;
    }
    public void setIntellij(Intellij intellij) {
        this.intellij = intellij;
    }

    //what if i need to set age usign constructor
    public  Developer(int age) {
        this.age = age;
        System.out.println("Developer created");
    }

    public void build(){
        System.out.println("Building app");
        intellij.code();
    }
}
