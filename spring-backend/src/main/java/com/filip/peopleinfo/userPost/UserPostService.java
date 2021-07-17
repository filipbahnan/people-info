package com.filip.peopleinfo.userPost;

import com.filip.peopleinfo.user.User;
import com.filip.peopleinfo.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserPostService {

    @Autowired
    private UserPostRepository UserPostRepository;

    public List<UserPostProjections> getPostsFromUser(String user) {
        return UserPostRepository.selectPostsWhereUser(user);
    }
}
