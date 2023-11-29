package Backend.Backend.Models;

import java.util.HashMap;

import org.springframework.stereotype.Component;

@Component
public class Person {

  private String email;
  private String password;

  private HashMap<String,Person> EmailVsUserMap= new HashMap<>();

public String getEmail() {
    return email;
}
public void setEmail(String email) {
    this.email = email;
}
public String getPassword() {
    return password;
}
public void setPassword(String password) {
    this.password = password;
}
public HashMap<String, Person> getEmailVsUserMap() {
    return EmailVsUserMap;
}
public void setEmailVsUserMap() {
    Person p=new Person();
    p.setEmail(email);
    p.setPassword(password);
    EmailVsUserMap.put(email,p);
}



    
}
