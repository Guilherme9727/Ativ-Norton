CREATE DATABASE Biblioteca;
USE Biblioteca;



CREATE TABLE categoria_leitor (
    id INT PRIMARY KEY,
    descricao VARCHAR(100) NOT NULL,
    dias_emprestimo INT NOT NULL
);


CREATE TABLE leitor (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE,
    telefone VARCHAR(20),
    endereco VARCHAR(120),
    cidade VARCHAR(50),
    estado CHAR(2),
    data_nascimento DATE,
    categoria_leitor_id INT,

    CONSTRAINT fk_leitor_categoria
    FOREIGN KEY (categoria_leitor_id)
    REFERENCES categoria_leitor(id)
);

CREATE TABLE aluno (
    leitor_id INT PRIMARY KEY,
    FOREIGN KEY (leitor_id) REFERENCES leitor(id)
);

CREATE TABLE graduacao (
    aluno_id INT PRIMARY KEY,
    FOREIGN KEY (aluno_id) REFERENCES aluno(leitor_id)
);

CREATE TABLE pos_graduacao (
    aluno_id INT PRIMARY KEY,
    FOREIGN KEY (aluno_id) REFERENCES aluno(leitor_id)
);

CREATE TABLE usuario_externo (
    leitor_id INT PRIMARY KEY,
    FOREIGN KEY (leitor_id) REFERENCES leitor(id)
);

CREATE TABLE colaborador (
    leitor_id INT PRIMARY KEY,
    FOREIGN KEY (leitor_id) REFERENCES leitor(id)
);

CREATE TABLE professor (
    colaborador_id INT PRIMARY KEY,
    FOREIGN KEY (colaborador_id) REFERENCES colaborador(leitor_id)
);

CREATE TABLE outros_funcionarios (
    colaborador_id INT PRIMARY KEY,
    FOREIGN KEY (colaborador_id) REFERENCES colaborador(leitor_id)
);


CREATE TABLE funcionario (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    endereco VARCHAR(120),
    cidade VARCHAR(50),
    estado CHAR(2),
    data_nascimento DATE
);


CREATE TABLE categoria_obra (
    id INT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);


CREATE TABLE obra (
    id INT PRIMARY KEY,
    isbn VARCHAR(20),
    titulo VARCHAR(200) NOT NULL,
    autor VARCHAR(150),
    palavras_chave VARCHAR(200),
    data_publicacao DATE,
    editora VARCHAR(100),
    numero_edicao INT,
    numero_paginas INT,
    categoria_obra_id INT,

    FOREIGN KEY (categoria_obra_id)
    REFERENCES categoria_obra(id)
);


CREATE TABLE revista (
    obra_id INT PRIMARY KEY,
    FOREIGN KEY (obra_id) REFERENCES obra(id)
);

CREATE TABLE jornal (
    obra_id INT PRIMARY KEY,
    FOREIGN KEY (obra_id) REFERENCES obra(id)
);

CREATE TABLE academico (
    obra_id INT PRIMARY KEY,
    FOREIGN KEY (obra_id) REFERENCES obra(id)
);

CREATE TABLE livro (
    obra_id INT PRIMARY KEY,
    FOREIGN KEY (obra_id) REFERENCES obra(id)
);


CREATE TABLE copia (
    id INT PRIMARY KEY,
    obra_id INT,
    situacao VARCHAR(20),

    FOREIGN KEY (obra_id)
    REFERENCES obra(id)
);


CREATE TABLE reserva (
    id INT PRIMARY KEY,
    leitor_id INT,
    obra_id INT,
    data_reserva DATE,
    data_retirada_prevista DATE,
    data_devolucao_prevista DATE,
    funcionario_id INT,

    FOREIGN KEY (leitor_id)
    REFERENCES leitor(id),

    FOREIGN KEY (obra_id)
    REFERENCES obra(id),

    FOREIGN KEY (funcionario_id)
    REFERENCES funcionario(id)
);


CREATE TABLE emprestimo (
    id INT PRIMARY KEY,
    copia_id INT,
    leitor_id INT,
    funcionario_id INT,
    data_emprestimo DATE,
    data_prevista DATE,
    data_devolucao DATE,
    multa DECIMAL(10,2),

    FOREIGN KEY (copia_id)
    REFERENCES copia(id),

    FOREIGN KEY (leitor_id)
    REFERENCES leitor(id),

    FOREIGN KEY (funcionario_id)
    REFERENCES funcionario(id)
);