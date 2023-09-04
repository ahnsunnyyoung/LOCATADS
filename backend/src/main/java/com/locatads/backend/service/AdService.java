package com.locatads.backend.service;

import com.locatads.backend.exception.UserNotFoundException;
import com.locatads.backend.model.Ad;
import com.locatads.backend.model.User;
import com.locatads.backend.repo.AdRepo;
import com.locatads.backend.repo.UserRepo;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class AdService {
    private final AdRepo adRepo;
    private final UserService userService;
    public AdService(AdRepo adRepo, UserService userService){
        this.adRepo = adRepo;
        this.userService = userService;
    }
    public Ad addAd(Ad ad, Long userId) {
//        userService.addAdToUser(ad, userId);
        ad.setUid(userId);
        return adRepo.save(ad);
//        return ad;
    }
    public List<Ad> findAllAds() { return adRepo.findAll(); }
    public List<Ad> findByUid(Long userId) {
        //        User user = userService.findUserById(userId);
        return adRepo.findByUid(userId); }

    public Ad updateAd(Ad ad, Long userId) {
        return adRepo.save(ad);
    }
    public void deleteAd(Long adId, Long userId) {
        adRepo.deleteAdById(adId);
    }
    public Ad findAdById(Long id) {
        return adRepo.findAdById(id)
                .orElseThrow(() -> new UserNotFoundException("Ad by id " + id + " was not found"));
    }
}
