package com.fatec.lojinha;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoRepository extends JpaRepository<Pedido,Integer> {

    // Lista de pedidos de um cliente (mais recentes primeiro)
    @Query(value = "SELECT * FROM pedido WHERE codigo_cliente = :codigoCliente "
                 + "ORDER BY data_pedido DESC, codigo_pedido DESC",
           nativeQuery = true)
    List<Pedido> listarPorCliente(@Param("codigoCliente") int codigoCliente);

}
