package com.locatads.backend.service;

import com.locatads.backend.exception.UserNotFoundException;
import com.locatads.backend.model.Ad;
import com.locatads.backend.model.User;
import com.locatads.backend.repo.UserRepo;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
@Transactional
public class UserService {
    private final UserRepo userRepo;
    public UserService(UserRepo userRepo){
        this.userRepo = userRepo;
    }

    public User addUser(User user) {
        return userRepo.save(user);
    }

    public List<User> findAllUsers() { return userRepo.findAll(); }

    public User updateUser(User user) {
        return userRepo.save(user);
    }
    public void deleteUser(Long id) {
        userRepo.deleteUserById(id);
    }
    public User findUserById(Long id) {
        return userRepo.findUserById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id " + id + " was not found"));
    }

    public User findUserByEmail(String email) {
        return userRepo.findUserByEmail(email)
                .orElseThrow(() -> new UserNotFoundException("User by email " + email + " was not found"));
    }

//    public User addAdToUser(Ad ad, Long userId) {
//        User user = this.findUserById(userId);
//        List<Ad> newAdList = user.getAdList();
//        newAdList.add(ad);
//        user.setAdList(newAdList);
//        return userRepo.save(user);
//    }
//
//    public User updateAdToUser(Ad newAd, Long userId) {
//        User user = this.findUserById(userId);
//        List<Ad> newAdList = user.getAdList();
////        update user adlist to updated ad
//        for(int i = 0 ; i<newAdList.size(); i++){
//            if(Objects.equals(newAdList.get(i).getId(), newAd.getId())){
//                newAdList.set(i,newAd);
//            }
//        }
//        return userRepo.save(user);
//    }
//
//    public User deleteAdToUser(Long adId, Long userId) {
//        User user = this.findUserById(userId);
//        List<Ad> userAdList = user.getAdList();
//        userAdList.removeIf(ad -> Objects.equals(ad.getId(), adId));
//        return userRepo.save(user);
//    }
}
