
import java.util.HashMap;

public class UserList {

    private HashMap<Integer, User> list = new HashMap<Integer, User>();

    public void addUser(User user){
        this.list.put(user.getKey(), user);
    }

    public HashMap<Integer, User> getList() {
        return list;
    }


}
