package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.TodoDAO;
import com.example.demo.dto.TodoDTO;

@Service
public class TodoServiceImp implements TodoService{

	@Autowired // TodoDAO가 자동으로 연결된다.
	private TodoDAO todoDao;
	
	public TodoServiceImp() {

	}

	@Override
	public List<TodoDTO> search() throws Exception {
		return todoDao.getTodoList();
	}

	@Override
	public int insert(TodoDTO dto) throws Exception {
		return todoDao.insertTodoList(dto);
	}

	@Override
	public int update(TodoDTO dto) throws Exception {
		return todoDao.updateTodoList(dto);
	}

	@Override
	public int delete(int id) throws Exception {
		return todoDao.deleteTodoList(id);
	}
	
}
