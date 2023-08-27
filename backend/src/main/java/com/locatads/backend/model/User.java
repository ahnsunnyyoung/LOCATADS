package com.locatads.backend.model;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name;
    private String email;
    private Integer type;
//    0 -> Advertiser, 1-> Driver
    private String adCompanyName;

    public User() {
    }

    public User(String name, String email, Integer type, String adCompanyName) {
        this.name = name;
        this.email = email;
        this.type = type;
        this.adCompanyName = adCompanyName;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public String getAdCompanyName() {
        return adCompanyName;
    }

    public void setAdCompanyName(String adCompanyName) {
        this.adCompanyName = adCompanyName;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", type=" + type +
                ", adCompanyName='" + adCompanyName + '\'' +
                '}';
    }
}
