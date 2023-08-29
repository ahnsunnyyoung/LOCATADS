package com.locatads.backend.repo;

import com.locatads.backend.model.Ad;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AdRepo extends JpaRepository<Ad, Long> {

    Optional<Ad> findAdById(Long id);

    void deleteAdById(Long id);
}
