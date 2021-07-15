package com.filip.peopleinfo.userPost;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/userposts")
public class UserPostController {

    @Autowired
    private UserPostService userPostService;

    @RequestMapping(value = "/posts", method = RequestMethod.GET)
    public List<UserPostProjections> getAllUserPosts() {
        return userPostService.selectAllPosts();
    }

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public List<UserPostProjections> getUserPosts(@RequestParam String user) {
        return userPostService.getPostsFromUser(user);
    }
}
