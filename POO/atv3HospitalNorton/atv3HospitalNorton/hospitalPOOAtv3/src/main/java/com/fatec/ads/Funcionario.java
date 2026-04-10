package com.fatec.ads;

public abstract class Funcionario {
    public String nome;
    public String telefone;
    public String senha;

    // Constructors
    public Funcionario(String nome, String telefone, String senha) {
        this.nome = nome;
        this.telefone = telefone;
        this.senha = senha;
    }

    public Funcionario() {
        this.nome = "indefinido";
        this.telefone = "indefinido";
        this.senha = "indefinido";
    }

    public String getNome() {
        return nome;
    }

    // Métodos
    public void acessar() {
    }
}
