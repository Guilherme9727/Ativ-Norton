package com.fatec.ads;
//Medica efetiva consulta e solicita exames
//Recepcionista marca consulta
public class App 
{
    public static void main( String[] args )
    {

        try{
        int x =1;
        var p1 = new Paciente(x++, "jose da silva", "jose@norton.net.br");
        p1.mostrar();
        
        var p2 = new Paciente(x++, "maria souza","maria@norton.net.br");
        p2.mostrar();
        
        var receita1 = new Receita();
        receita1.mostrar();
        var recepcionista1 = new Recepcionista();
        recepcionista1.mostrar();
        var medico1 = new Medico();
        medico1.mostrar();
        var exame1 = new Exame();
        exame1.mostrar();
        var agenda1 = new Agenda();
        agenda1.mostrar();
        var consulta1 = new Consulta();
        consulta1.mostrar();

        }
        catch(Exception e){
            System.out.println("Ocorreu um erro: " + e.getMessage());
        }
        
    
        
        
        
        
    }
}
