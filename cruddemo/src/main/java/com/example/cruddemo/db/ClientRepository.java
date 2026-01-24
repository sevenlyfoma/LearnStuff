package com.example.cruddemo.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.cruddemo.model.Client;

public interface ClientRepository extends JpaRepository<Client, Long> {
}