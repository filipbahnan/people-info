package com.filip.peopleinfo.user;

import com.filip.peopleinfo.userPost.UserPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @Query(nativeQuery=true, value="SELECT * FROM users WHERE name LIKE %:search% OR email LIKE %:search%")
    List<User> selectSpeficUser(@Param("search") String search);
}