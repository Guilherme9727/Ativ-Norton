package com.fatec.lojinha;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class ClienteController {
    @Autowired
    ClienteRepository bd;

    // Só existe se spring.mail.host estiver configurado no application.properties
    @Autowired
    ObjectProvider<JavaMailSender> mailSender;

    
    @GetMapping("/api/cliente/{codigo}")
    public Cliente retorna(@PathVariable("codigo") int id){
        if(bd.existsById(id)){
            return bd.findById(id).get();
        } else {
            return new Cliente();
        }
    }

    @PostMapping("/api/cliente")
    public String gravar(@RequestBody Cliente obj){
        bd.save(obj);
        return "Cliente gravado com sucesso! "+ obj.getCodigo();
    }
   
    @PutMapping("/api/cliente")
    public String alterar(@RequestBody Cliente obj){
        if(bd.existsById(obj.getCodigo())){
            bd.save(obj);
            return "Cliente alterado com sucesso! "+ obj.getCodigo();
        } else {
            return "Cliente não encontrado!";
        }
    }

    @DeleteMapping("/api/cliente/{codigo}")
    public String apagar(@PathVariable("codigo") int id){
        bd.deleteById(id);
        return "Cliente removido com sucesso!";
    }

    @PostMapping("/api/cliente/login")
    public Cliente login(@RequestBody LoginRequest dados){
        if(dados.email() == null || dados.senha() == null){
            return new Cliente();
        }
        Cliente c = bd.login(dados.email(), dados.senha());
        if(c == null){
            return new Cliente(); // codigo 0 = login inválido
        }
        // devolve uma cópia sem a senha
        Cliente retorno = new Cliente();
        retorno.setCodigo(c.getCodigo());
        retorno.setNome(c.getNome());
        retorno.setTelefone(c.getTelefone());
        retorno.setDocumento(c.getDocumento());
        retorno.setLogradouro(c.getLogradouro());
        retorno.setEmail(c.getEmail());
        retorno.setAtivo(c.getAtivo());
        return retorno;
    }

    private SimpleMailMessage montarEmail(Cliente c){
        SimpleMailMessage msg = new SimpleMailMessage();
        msg.setTo(c.getEmail());
        msg.setSubject("Lojinha - Recuperação de senha");
        msg.setText("Olá, " + c.getNome() + "!\n\nSua senha é: " + c.getSenha());
        return msg;
    }

    @PostMapping("/api/cliente/reenvio-senha")
    public String reenviarSenha(@RequestBody ReenvioSenhaRequest dados){
        String resposta = "Se o e-mail estiver cadastrado, a senha foi enviada.";
        if(dados.email() == null || dados.email().isBlank()){
            return "Informe o e-mail!";
        }
        JavaMailSender sender = mailSender.getIfAvailable();
        if(sender == null){
            return "Serviço de e-mail não configurado (spring.mail.*).";
        }
        Cliente c = bd.buscarPorEmail(dados.email());
        if(c != null){
            SimpleMailMessage msg = montarEmail(c);
            sender.send(msg);
        }
        return resposta;
    }

}
