package com.apilearning.rest.Service;

import java.util.List;
import java.util.Optional;

import com.apilearning.rest.ExceptionHandling.UserNotFoundException;
import com.apilearning.rest.Model.Users;
import com.apilearning.rest.Repo.UserJpa;

import org.springframework.stereotype.Service;

/**
 * UserDaoService
 */
@Service
public class UserDaoServices {
  private UserJpa jpa;

  public UserDaoServices(UserJpa jpa) {
    this.jpa =   jpa;
  }

  public List<Users> getUsers() {
    return jpa.findAll();
  }

  public Optional<Users>  getUsersById(int id) {
    return jpa.findById(id);
  }

  public Users saveUser(Users user) {
    jpa.save(user);
          return user;
  }

  public String getUsersByName(int id) {
    return jpa.getUsersByName(id);
  }

}
