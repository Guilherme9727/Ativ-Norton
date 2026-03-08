package com.fatec.ads;

public class App {
    public static void main(String[] args) {
        int x = 1;
        
        // Testando Paciente (com construtor vazio e com parâmetros)
        Paciente p1 = new Paciente();
        p1.setCodigo(x++);
        p1.setNome("Jose da Silva");
        p1.setEmail("jose@norton.net.br");
        p1.mostrar();
        
        Paciente p2 = new Paciente(x++, "Maria Souza", "maria@norton.net.br");
        p2.mostrar();
        
        // Testando Medico (usando o construtor com parâmetros)
        Medico m1 = new Medico("Dr. Carlos", "12345-SP", "1199999999", "Cardiologia", "senha123");
        m1.mostrar();

        // Testando Consulta
        Consulta c1 = new Consulta("14:30", "15/10/2026", m1, p2, "Dor no peito", "Nenhum histórico grave");
        c1.mostrar();
    }
}