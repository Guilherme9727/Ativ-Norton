package com.ads.loja;

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

    // GET - carrega o detalhe de um cliente
    @GetMapping("/api/cliente/{codigo}")
    public Cliente carregarDetalhe(@PathVariable("codigo") int id) {
        var obj = new Cliente(); //TODO usar banco de dados
        obj.setCodigo(id);
        obj.setNome("João da Silva");
        obj.setCpf("123.456.789-00");
        obj.setEmail("joao@email.com");
        obj.setTelefone("(11) 99999-9999");
        obj.setEndereco("Rua das Flores, 100");
        return obj;
    }

    // POST - grava um novo cliente
    @PostMapping("/api/cliente/")
    public String gravar(@RequestBody Cliente obj) {
        //TODO gravar no banco
        return "Cliente gravado com sucesso " + obj.getNome();
    }

    // PUT - altera um cliente existente
    @PutMapping("/api/cliente/{codigo}")
    public String alterar(@PathVariable("codigo") int id, @RequestBody Cliente obj) {
        obj.setCodigo(id);
        //TODO atualizar no banco
        return "Cliente " + id + " alterado com sucesso " + obj.getNome();
    }

    // DELETE - exclui um cliente
    @DeleteMapping("/api/cliente/{codigo}")
    public String excluir(@PathVariable("codigo") int id) {
        //TODO excluir do banco
        return "Cliente " + id + " excluído com sucesso";
    }

}
