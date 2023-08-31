package com.locatads.backend.repo;

import com.locatads.backend.model.Taxi;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaxiRepo extends JpaRepository<Taxi, Long> {
}

