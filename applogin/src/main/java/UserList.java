import java.sql.Timestamp;
import java.util.Map;

public class UserList {

    private Map<Long, User> list;

    public void addUser(User user){
        this.list.put(user.getKey(), user);
    }

    public Map<Long, User> getList() {
        return list;
    }
}
