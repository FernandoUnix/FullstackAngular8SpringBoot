package com.rest.webservices.restwebservices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class RestWebServicesApplication implements CommandLineRunner{

	
	public static void main(String[] args) {
		SpringApplication.run(RestWebServicesApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		String password = "12345";
		System.out.println(new BCryptPasswordEncoder().encode(password));
	}
}
