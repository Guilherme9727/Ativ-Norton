package com.ads.loja;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class ProdutoController {
    
    @GetMapping("/api/produto/{codigo}")
    public Produto carregarDetalhe(@PathVariable("codigo") int id){
        var obj = new Produto(); //TODO usar banco de dados
        obj.setCodigo(id);
        obj.setDescritivo("martelo");
        obj.setDestaque(1);
        obj.setEstoque(100);
        obj.setNome("martelo");
        obj.setValor(30);
        obj.setValorPromo(25);
        return obj;
    }

    @PostMapping("/api/produto/")
    public String gravar(@RequestBody Produto obj){
        //TODO gravar no banco
        return "Produto gravado com sucesso "+ obj.getNome();
    }

}
