package com.filip.peopleinfo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(path = "api/v1/users")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    public ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity.status(HttpStatus.OK).body(userService.getAllUsers());
    }

    @RequestMapping(value = "/search", method = RequestMethod.GET)
    public ResponseEntity<List<User>> getSpecificUsers(@RequestParam String input){
        return ResponseEntity.status(HttpStatus.OK).body(userService.searchUsers(input));
    }
}
