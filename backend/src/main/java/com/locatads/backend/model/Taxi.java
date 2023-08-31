package com.locatads.backend.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class Taxi implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User userId;
    private String taxiName;
    private String taxiType;
    private String taxiServiceType;

}
