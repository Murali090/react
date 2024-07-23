
package com.apilearning.rest.Controllers;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import com.apilearning.rest.ExceptionHandling.UserNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import com.apilearning.rest.Model.Users;
import com.apilearning.rest.Service.UserDaoServices;


@RestController
public class UserResource {
  private UserDaoServices service;

  UserResource(UserDaoServices service) {
    this.service = service;
  }

  //Get Mappings
  @GetMapping("/Users")
  public List<Users> getUser() {
    return service.getUsers();
  }

  @GetMapping("/Users/{id}")
  public Optional<Users> getUserById(@PathVariable int id) {
    Optional<Users> user = service.getUsersById(id);

    if(user.isEmpty()){
      throw  new UserNotFoundException("UserNotFound +id" + id);
    }
    return user;
  }

  @GetMapping("/Users/getUsername/{id}")
  public String getUserNameById(@PathVariable int id) {
    return service.getUsersByName(id);
  }

  @PostMapping("/Users/adduser")
  public ResponseEntity<Users> sendUser(@RequestBody Users user) {
    // service.saveUser(user);

    Users savedUser = service.saveUser(user);
    URI location = ServletUriComponentsBuilder
                   .fromCurrentRequest()
                   .path("/{id}")
                   .buildAndExpand(savedUser.getId())
                   .toUri() ;
    return ResponseEntity.created(location).build();
  }
}
