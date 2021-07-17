package com.filip.peopleinfo.userPost;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/userposts")
public class UserPostController {

    @Autowired
    private UserPostService userPostService;

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public ResponseEntity<List<UserPostProjections>> getUserPosts(@RequestParam String user) {
        return ResponseEntity.status(HttpStatus.OK).body(userPostService.getPostsFromUser(user));
    }
}
