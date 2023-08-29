package com.locatads.backend;

import com.locatads.backend.model.Ad;
import com.locatads.backend.service.AdService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ad")
public class AdResource {
    private final AdService adService;


    public AdResource(AdService adService) {
        this.adService = adService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Ad>> getAllAd() {
        List<Ad> ads = adService.findAllAds();
        return new ResponseEntity<>(ads, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Ad> getAdById(@PathVariable("id") Long id) {
        Ad user = adService.findAdById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping("/findByUser/{userId}")
    public ResponseEntity<List<Ad>> getUserById(@PathVariable("userId") Long userId) {
        List<Ad> ads = adService.findByUserId(userId);
        return new ResponseEntity<>(ads, HttpStatus.OK);
    }

    @PostMapping("/add/{userId}")
    public ResponseEntity<Ad> addUser(@RequestBody Ad ad, @PathVariable("userId") Long userId) {
        Ad newAd = adService.addAd(ad, userId);
        return new ResponseEntity<>(newAd, HttpStatus.CREATED);
    }

    @PutMapping("/update/{userId}")
    public ResponseEntity<Ad> updateUser(@RequestBody Ad ad, @PathVariable("userId") Long userId) {
        Ad updateUser = adService.updateAd(ad, userId);
        return new ResponseEntity<>(updateUser, HttpStatus.OK);
    }

//    @DeleteMapping("/delete/{id}")
//    public ResponseEntity<?> deleteUser(@PathVariable("id") Long id) {
//        adService.deleteUser(id);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }

}
