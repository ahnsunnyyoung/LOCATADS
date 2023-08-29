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
        userService.addAdToUser(ad, userId);
        return adRepo.save(ad);
    }
    public List<Ad> findAllAds() { return adRepo.findAll(); }
    public List<Ad> findByUserId(Long userId) {
        User user = userService.findUserById(userId);
        return user.getAdList(); }

    public Ad updateAd(Ad ad, Long userId) {
        userService.updateAdToUser(ad, userId);
        return adRepo.save(ad);
    }
    public void deleteAd(Long id) {
        adRepo.deleteAdById(id);
    }
    public Ad findAdById(Long id) {
        return adRepo.findAdById(id)
                .orElseThrow(() -> new UserNotFoundException("Ad by id " + id + " was not found"));
    }
}
