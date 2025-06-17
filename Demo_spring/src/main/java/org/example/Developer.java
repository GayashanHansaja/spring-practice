package org.example;


public class Developer {

    private int age = 30;
    //when need to take objec like another class,not like asigning varibale
    private ide myide;

    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }

    public ide getmyide() {
        return myide;
    }
    public void setMyide( ide myide) {
        this.myide = myide;
    }

    //what if i need to set age usign constructor
/*    public  Developer(ide myide, int age) {
        this.age = age;
        this.myide = myide;
        System.out.println("Developer created");
    }*/

    public void build(){
        System.out.println("Building app");
        myide.code();
    }
}
