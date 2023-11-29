package Backend.Backend.Configuration;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Backend.Backend.Models.JwtResponse;
import Backend.Backend.Models.Person;
import Backend.Backend.Security.JwtHelper;
import ch.qos.logback.classic.Logger;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager manager;

    @Autowired
    private CustomUserDetail customUserDetail;

    @Autowired
    private JwtHelper helper;
    
    @Autowired
    private JwtResponse jwtResponse;

    private Logger logger = (Logger) LoggerFactory.getLogger(AuthController.class);


    @PostMapping("/login")
    public ResponseEntity<JwtResponse> login(@RequestBody Person request) {
       System.out.println("Login email and password ");
        this.doAuthenticate(request.getEmail(), request.getPassword());
         System.out.println("Do Auth " );

        UserDetails userDetails = customUserDetail.loadUserByUsername(request.getEmail());
        System.out.println("UserDetail " +userDetails.getPassword());
        String token = this.helper.generateToken(userDetails);
        System.out.println("TOKen "+token);
        JwtResponse response = jwtResponse.setJwtToken(token).setUsername(userDetails.getUsername());
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private void doAuthenticate(String email, String password) {
              System.out.println("Email "+ email +" "+"password "+password);
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);
        System.out.println("authentication returned " + authentication);
        try {
                 
            manager.authenticate(authentication);

        } catch (BadCredentialsException e) {
            throw new BadCredentialsException(" Invalid Username or Password  !!");
        }

    }

    @ExceptionHandler(BadCredentialsException.class)
    public String exceptionHandler() {
        return "Credentials Invalid !!";
    }

}
