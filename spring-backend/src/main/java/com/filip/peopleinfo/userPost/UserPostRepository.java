package com.filip.peopleinfo.userPost;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserPostRepository extends JpaRepository<UserPost, Long> {

    /*    @Query(nativeQuery=true, value="SELECT user_posts.title, users.name FROM user_posts INNER JOIN users on users.id  =  user_posts.user_id WHERE users.name =:user")
     */

    //@Query("SELECT u.id as id, u.title as title, u.text as text, u.user.name as userName FROM UserPost u")
    @Query("SELECT u.id as id, u.title as title, u.text as text, u.user.name as userName FROM UserPost u")
    List<UserPostProjections> findAllUserPost();

    @Query("SELECT u.id as id, " +
            "u.title as title, " +
            "u.text as text,"  +
            "u.user.name as userName FROM UserPost u WHERE u.user.name =:user")
    List<UserPostProjections> selectPostsWhereUser(@Param("user") String user);
}