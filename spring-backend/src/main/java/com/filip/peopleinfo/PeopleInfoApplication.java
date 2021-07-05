package com.filip.peopleinfo;

import com.filip.peopleinfo.hello.Hello;
import com.filip.peopleinfo.hello.HelloRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class PeopleInfoApplication {

	public static void main(String[] args) {
		SpringApplication.run(PeopleInfoApplication.class, args);
	}

	@Bean
	ApplicationRunner init(HelloRepository helloRepository) {
		return args -> {
			Hello hello = new Hello("Hello world!?!?!");
			helloRepository.save(hello);
		};
	}
}
