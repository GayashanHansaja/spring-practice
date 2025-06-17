package org.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        //this application context doesnt come with spring because it is a third party library, and spring have to configure it manualy
        ApplicationContext context = new ClassPathXmlApplicationContext("spring.xml");

        Developer developer = (Developer)context.getBean(Developer.class);
        developer.build();

        //instead of set values to developer age  we can use spring to do that in spring xml , we inject value instead asigning
        /*System.out.print(developer.getAge());*/

    }
}
