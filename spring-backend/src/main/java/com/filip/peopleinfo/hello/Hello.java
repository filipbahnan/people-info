package com.filip.peopleinfo.hello;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "hello_world")
public class Hello {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="id")
    private Long id;

    @Column(name = "hello_world")
    private String helloWorld;

    public Hello() {
    }

    public Hello(String helloWorld) {
        this.helloWorld = helloWorld;
    }

    @Override
    public String toString() {
        return "Hello{" +
                "id=" + id +
                ", helloWorld='" + helloWorld + '\'' +
                '}';
    }
}
