package com.filip.peopleinfo.userPost;

import com.filip.peopleinfo.user.User;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "user_posts")
public class UserPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id", nullable=false, unique=true)
    private Long id;

    @Column(name = "title", nullable=false)
    private String title;

    @Column(name = "text", nullable=false)
    private String text;

    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id" ,nullable=false)
    private User user;

    public UserPost() {
    }

    public UserPost(Long id, String title, String text, User user) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.user = user;
    }

    @Override
    public String toString() {
        return "UserPost{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", text='" + text + '\'' +
                ", user=" + user +
                '}';
    }
}
