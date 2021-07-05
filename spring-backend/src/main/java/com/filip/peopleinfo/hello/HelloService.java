package com.filip.peopleinfo.hello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HelloService
{
    @Autowired
    private HelloRepository helloRepository;

    public List<Hello> getHello()
    {
        return helloRepository.findAll();
    }
}
