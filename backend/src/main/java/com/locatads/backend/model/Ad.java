package com.locatads.backend.model;

import jakarta.persistence.*;

import java.io.Serializable;
import java.util.Date;

@Entity
public class Ad implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User userId;
    private String adTitle;
    private Integer adType;
    private Integer adTarget;
    private Integer adWeather;
    private Integer adTime;
    private Integer adServiceType;
    private Integer views;
    private Integer display;
    private Integer status;
    private Date date;

    public Ad() {
    }

    public Ad(String adTitle, Integer adType, Integer adTarget, Integer adWeather, Integer adTime, Integer adServiceType, Integer views, Integer display, Integer status, Date date) {
        this.adTitle = adTitle;
        this.adType = adType;
        this.adTarget = adTarget;
        this.adWeather = adWeather;
        this.adTime = adTime;
        this.adServiceType = adServiceType;
        this.views = views;
        this.display = display;
        this.status = status;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAdTitle() {
        return adTitle;
    }

    public void setAdTitle(String adTitle) {
        this.adTitle = adTitle;
    }

    public Integer getAdType() {
        return adType;
    }

    public void setAdType(Integer adType) {
        this.adType = adType;
    }

    public Integer getAdTarget() {
        return adTarget;
    }

    public void setAdTarget(Integer adTarget) {
        this.adTarget = adTarget;
    }

    public Integer getAdWeather() {
        return adWeather;
    }

    public void setAdWeather(Integer adWeather) {
        this.adWeather = adWeather;
    }

    public Integer getAdTime() {
        return adTime;
    }

    public void setAdTime(Integer adTime) {
        this.adTime = adTime;
    }

    public Integer getAdServiceType() {
        return adServiceType;
    }

    public void setAdServiceType(Integer adServiceType) {
        this.adServiceType = adServiceType;
    }

    public Integer getViews() {
        return views;
    }

    public void setViews(Integer views) {
        this.views = views;
    }

    public Integer getDisplay() {
        return display;
    }

    public void setDisplay(Integer display) {
        this.display = display;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
