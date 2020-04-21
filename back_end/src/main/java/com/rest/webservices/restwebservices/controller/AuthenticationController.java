package com.rest.webservices.restwebservices.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.rest.webservices.restwebservices.entities.AuthenticationBean;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class AuthenticationController {

	@GetMapping(path = "/basicauth")
	public AuthenticationBean helloWorld() {
		return new AuthenticationBean("You are authentication");
	}
}
