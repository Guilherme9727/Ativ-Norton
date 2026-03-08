package com.fatec.ads;

public class Agenda {
    // Mantendo private por causa dos gets e sets
    private String data;
    private String hora;
    private String medico;
    private String paciente;

    // 1. Construtor sem parâmetros (vazio e simples)
    public Agenda() {
    }

    // 2. Construtor com parâmetros
    public Agenda (String pData, String pHora, String pMedico, String pPaciente){
        setData(pData);
        setHora(pHora);
        setMedico(pMedico);
        setPaciente(pPaciente);
    }
    
    // Getters e Setters
    public String getData() { return data; }
    public void setData(String data) { this.data = data; }

    public String getHora() { return hora; }
    public void setHora(String hora) { this.hora = hora; }

    public String getMedico() { return medico; }
    public void setMedico(String medico) { this.medico = medico; }

    public String getPaciente() { return paciente; }
    public void setPaciente(String paciente) { this.paciente = paciente; }

    public void consultar(){
        //TODO
    }
    
    public void mostrar(){
        System.out.println(">>>>>Agenda<<<<<<<");
        System.out.println("data:"+getData());
        System.out.println("hora:"+getHora());
        System.out.println("medico:"+getMedico());
        System.out.println("paciente:"+getPaciente());
    }
}