import java.sql.Timestamp;

public class User {

    private String name;
    private String password;
    private Timestamp ts;
    private final Long key;

    User(String name, String password){
        this.name = name;
        this.password = password;
        this.ts = new Timestamp(System.currentTimeMillis());
        this.key = ts.getTime();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getKey() {
        return key;
    }
}
