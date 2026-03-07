class Paciente {

    String nome;
    String cpf;
    String telefone;
    String genero;
    int idade;

    void cadastrar() {
        System.out.println("Paciente cadastrado.");
    }

    void consultar() {
        System.out.println("Consultando dados do paciente.");
    }

    void mostrar() {
        System.out.println("Paciente: " + nome);
        System.out.println("CPF: " + cpf);
        System.out.println("Telefone: " + telefone);
        System.out.println("Genero: " + genero);
        System.out.println("Idade: " + idade);
        System.out.println();
    }
}

class Medico {

    String nome;
    String crm;
    String telefone;
    String especialidade;
    String senha;

    void acessar() {
        System.out.println("Medico acessou o sistema.");
    }

    void mostrar() {
        System.out.println("Medico: " + nome);
        System.out.println("CRM: " + crm);
        System.out.println("Telefone: " + telefone);
        System.out.println("Especialidade: " + especialidade);
        System.out.println();
    }
}

class Recepcionista {

    String nome;
    String cpf;
    String telefone;
    String senha;

    void acessar() {
        System.out.println("Recepcionista acessou o sistema.");
    }

    void mostrar() {
        System.out.println("Recepcionista: " + nome);
        System.out.println("CPF: " + cpf);
        System.out.println("Telefone: " + telefone);
        System.out.println();
    }
}

class Agenda {

    String data;
    String hora;
    String medico;
    String paciente;

    void consultar() {
        System.out.println("Consultando agenda.");
    }

    void mostrar() {
        System.out.println("Agenda:");
        System.out.println("Data: " + data);
        System.out.println("Hora: " + hora);
        System.out.println("Medico: " + medico);
        System.out.println("Paciente: " + paciente);
        System.out.println();
    }
}

class Consulta {

    String data;
    String hora;
    String medico;
    String paciente;
    String motivo;
    String historico;

    void marcar() {
        System.out.println("Consulta marcada.");
    }

    void cancelar() {
        System.out.println("Consulta cancelada.");
    }

    void consultar() {
        System.out.println("Consultando consulta.");
    }

    void realizar() {
        System.out.println("Consulta realizada.");
    }

    void atualizar() {
        System.out.println("Consulta atualizada.");
    }

    void mostrar() {
        System.out.println("Consulta:");
        System.out.println("Data: " + data);
        System.out.println("Hora: " + hora);
        System.out.println("Medico: " + medico);
        System.out.println("Paciente: " + paciente);
        System.out.println("Motivo: " + motivo);
        System.out.println("Historico: " + historico);
        System.out.println();
    }
}

class Receita {

    String consulta;
    String data;
    String descritivo;

    void prescrever() {
        System.out.println("Receita prescrita.");
    }

    void consultar() {
        System.out.println("Consultando receita.");
    }

    void mostrar() {
        System.out.println("Receita:");
        System.out.println("Consulta: " + consulta);
        System.out.println("Data: " + data);
        System.out.println("Descricao: " + descritivo);
        System.out.println();
    }
}

class Exame {

    String consulta;
    String data;
    String descritivo;

    void solicitar() {
        System.out.println("Exame solicitado.");
    }

    void consultar() {
        System.out.println("Consultando exame.");
    }

    void mostrar() {
        System.out.println("Exame:");
        System.out.println("Consulta: " + consulta);
        System.out.println("Data: " + data);
        System.out.println("Descricao: " + descritivo);
        System.out.println();
    }
}

public class SistemaClinica {

    public static void main(String[] args) {

        Paciente paciente = new Paciente();
        paciente.nome = "Carlos Silva";
        paciente.cpf = "12345678900";
        paciente.telefone = "11999999999";
        paciente.genero = "Masculino";
        paciente.idade = 35;
        paciente.mostrar();

        Medico medico = new Medico();
        medico.nome = "Dr. Roberto";
        medico.crm = "CRM12345";
        medico.telefone = "11888888888";
        medico.especialidade = "Cardiologia";
        medico.senha = "1234";
        medico.mostrar();

        Recepcionista recep = new Recepcionista();
        recep.nome = "Ana Souza";
        recep.cpf = "98765432100";
        recep.telefone = "11777777777";
        recep.senha = "abcd";
        recep.mostrar();

        Agenda agenda = new Agenda();
        agenda.data = "10/04/2026";
        agenda.hora = "10:00";
        agenda.medico = "Dr. Roberto";
        agenda.paciente = "Carlos Silva";
        agenda.mostrar();

        Consulta consulta = new Consulta();
        consulta.data = "10/04/2026";
        consulta.hora = "10:00";
        consulta.medico = "Dr. Roberto";
        consulta.paciente = "Carlos Silva";
        consulta.motivo = "Dor no peito";
        consulta.historico = "Paciente com histórico de pressão alta";
        consulta.mostrar();

        Receita receita = new Receita();
        receita.consulta = "Consulta 001";
        receita.data = "10/04/2026";
        receita.descritivo = "Tomar medicamento X por 7 dias";
        receita.mostrar();

        Exame exame = new Exame();
        exame.consulta = "Consulta 001";
        exame.data = "11/04/2026";
        exame.descritivo = "Exame de sangue completo";
        exame.mostrar();
    }
}