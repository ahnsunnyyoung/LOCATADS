package com.locatads.backend.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

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
    @OneToMany(cascade = CascadeType.ALL, fetch= FetchType.LAZY)
    @JoinColumn(name = "user_id",referencedColumnName="id")
    private List<Ad> AdList = new ArrayList<Ad>();
    @OneToMany(cascade = CascadeType.ALL, fetch= FetchType.LAZY)
    @JoinColumn(name = "user_id",referencedColumnName="id")
    private List<Taxi> TaxiList = new ArrayList<Taxi>();
    private String password;

    public User() {
    }

    public User(String name, String email, Integer type, String adCompanyName, String password) {
        this.name = name;
        this.email = email;
        this.type = type;
        this.adCompanyName = adCompanyName;
        this.password = password;
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

    public List<Ad> getAdList() {
        return AdList;
    }

    public void setAdList(List<Ad> adList) {
        AdList = adList;
    }

    public List<Taxi> getTaxiList() {
        return TaxiList;
    }

    public void setTaxiList(List<Taxi> taxiList) {
        TaxiList = taxiList;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
