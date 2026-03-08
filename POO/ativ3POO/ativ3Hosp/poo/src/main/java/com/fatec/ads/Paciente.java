package com.fatec.ads;

public class Paciente {
    private int codigo;
    private String nome;
    private String email;

    public Paciente() {
    }

    public Paciente(int pCodigo, String pNome, String pEmail) {
        setCodigo(pCodigo);
        setNome(pNome);
        setEmail(pEmail);
    }

    public int getCodigo() { return codigo; }
    public void setCodigo(int codigo) { this.codigo = codigo; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public void mostrar() {
        System.out.println(">>>>>Paciente<<<<<<<");
        System.out.println("Codigo: " + getCodigo());
        System.out.println("Nome: " + getNome()); 
        System.out.println("Email: " + getEmail());
    }
}
