package com.rest.webservices.restwebservices.controller;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.rest.webservices.restwebservices.entities.Todo;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Long> {
	List<Todo> findByUsername(String username);
}
