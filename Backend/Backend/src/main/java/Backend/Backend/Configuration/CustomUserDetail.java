package Backend.Backend.Configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import Backend.Backend.Models.Person;

// Custom class is used by authentication manager to authenticate the user data. Authentication manager searches for all the class which have the implementaion of userDetailService interface.
@Configuration
@Service
public class CustomUserDetail implements UserDetailsService {
    @Autowired
    private Person person;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       
                    
                Person p= person.getEmailVsUserMap().get(username);
                UserDetails userDetails = User.builder().username(p.getEmail()).password(passwordEncoder().encode(p.getPassword())).build();
                return userDetails;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
}
