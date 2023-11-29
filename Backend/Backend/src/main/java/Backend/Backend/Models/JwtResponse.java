package Backend.Backend.Models;

import org.springframework.stereotype.Component;

@Component
public class JwtResponse {

    private String jwtToken;
    private String username;
    
    public String getJwtToken() {
        return jwtToken;
    }
    public JwtResponse setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
        return this;
    }
    public String getUsername() {
        return username;
    }
    public JwtResponse setUsername(String username) {
        this.username = username;
        return this;
    }
    public static Object builder() {
        return null;
    }
    
}
