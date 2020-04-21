package com.rest.webservices.restwebservices.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.stereotype.Service;
import com.rest.webservices.restwebservices.entities.*;

@Service
public class TodoService {

	private static List<Todo> todos = new ArrayList();
	private static long count = 0;

	static {

		todos.add(new Todo(++count, "in28minutes", "Learn to dance", new Date(), false));
		todos.add(new Todo(++count, "break", "Learn to chair", new Date(), true));
		todos.add(new Todo(++count, "inotice", "Learn to loko", new Date(), true));
	}

	public List<Todo> findAll() {
		return todos;
	}

	public Todo Save(Todo todo) {
		if (todo.getId() == -1 || todo.getId() == 0) {
			todo.setId(++count);
			todos.add(todo);
		} else {
			deleteById(todo.getId());
			todos.add(todo);
		}

		return todo;
	}

	public Todo deleteById(long id) {
		Todo todo = findByid(id);

		if (todo == null)
			return null;

		if (todos.remove(todo)) {
			return todo;
		}

		return null;
	}

	public Todo findByid(long id) {
		return todos.stream().filter(x -> x.getId() == id).findFirst().get();
	}
}
