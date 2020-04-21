package com.rest.webservices.restwebservices.entities;

public class AuthenticationBean {

	private String mensagem;

	public AuthenticationBean(String mensagem) {
		this.mensagem = mensagem;
	}

	public String getMensagem() {
		return mensagem;
	}

	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}
}
