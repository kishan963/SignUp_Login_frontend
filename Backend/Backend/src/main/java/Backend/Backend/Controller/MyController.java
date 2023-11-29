package Backend.Backend.Controller;

import org.apache.tomcat.util.http.parser.Authorization;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import Backend.Backend.Models.Person;


@RestController
public class MyController {
    
    @Autowired
    private Person person; 
    
  @PostMapping("/api/signup")  
 public ResponseEntity<String> doSignUp(@RequestBody Person user){
 
    if(!person.getEmailVsUserMap().containsKey(user.getEmail()))
        {
        Person p= new Person();
        p.setEmail(user.getEmail());
        p.setPassword(user.getPassword());
        person.getEmailVsUserMap().put(user.getEmail(),p);
        return ResponseEntity.ok("Status: 200 OK");
        }
        else
    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Status: 500 Internal Server Error");
 }

 @PostMapping("/api/get")  
 public ResponseEntity<String> doGet(){
    System.out.println("Code is Working ");
    return new ResponseEntity<>(HttpStatus.OK);
 }


    
}
