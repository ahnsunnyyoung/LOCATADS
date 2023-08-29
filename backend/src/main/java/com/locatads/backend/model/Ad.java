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
    private String adTitle;
    private String adType;
    private Integer adTarget;
    private String adWeather;
    private String adTime;
    private String adServiceType;
    private Integer views;
    private Integer display;
    private String status;
    private Date date;

    public Ad() {
    }

    public Ad(String adTitle, String adType, Integer adTarget, String adWeather, String adTime, String adServiceType, Integer views, Integer display, String status, Date date) {
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

    public String getAdType() {
        return adType;
    }

    public void setAdType(String adType) {
        this.adType = adType;
    }

    public Integer getAdTarget() {
        return adTarget;
    }

    public void setAdTarget(Integer adTarget) {
        this.adTarget = adTarget;
    }

    public String getAdWeather() {
        return adWeather;
    }

    public void setAdWeather(String adWeather) {
        this.adWeather = adWeather;
    }

    public String getAdTime() {
        return adTime;
    }

    public void setAdTime(String adTime) {
        this.adTime = adTime;
    }

    public String getAdServiceType() {
        return adServiceType;
    }

    public void setAdServiceType(String adServiceType) {
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
