package com.fatec.lojinha;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Cliente,Integer> {

    // Login: retorna o cliente se email e senha conferem, senão null
    @Query(value = "SELECT * FROM cliente WHERE email = :email AND senha = :senha LIMIT 1",
           nativeQuery = true)
    Cliente login(@Param("email") String email, @Param("senha") String senha);

    // Reenvio de senha: localiza o cliente pelo email
    @Query(value = "SELECT * FROM cliente WHERE email = :email LIMIT 1",
           nativeQuery = true)
    Cliente buscarPorEmail(@Param("email") String email);

}
