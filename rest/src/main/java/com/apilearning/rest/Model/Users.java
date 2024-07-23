package com.apilearning.rest.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.time.LocalDate;

/**
 * User
 */
@Entity
public class Users {

  @Id
  private int id;
  private String name;
  private LocalDate dates;

  public Users(int id, String name, LocalDate dates) {
    this.id = id;
    this.name = name;
    this.dates = dates;
  }

  public Users() {
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public LocalDate getDates() {
    return dates;
  }

  public void setDates(LocalDate dates) {
    this.dates = dates;
  }

  @Override
  public String toString() {
    return "Users [id=" + id + ", name=" + name + ", dates=" + dates + "]";
  }

}
