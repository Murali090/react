package com.apilearning.rest.Repo;

import com.apilearning.rest.Model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * UserJpa
 */
@Repository
public interface UserJpa extends JpaRepository<Users, Integer> {

  @Query("SELECT u.name FROM Users u where u.id = :id")
  String getUsersByName(@Param("id") int id);
}
