
import { Models } from "appwrite";
import '../index.css'

const UserCard = ( {user} ) => {
  
  console.log(user,'usercomp');
  return (
    <div className="w-auto user flex-center flex-col gap-4">
      <img
        src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
        alt="creator"
        className="user-img "
      />

      <div className="flex-center ">
        <p className="user-name">
          {user.name}
        </p>
        <p className="user-user">
          @{user.username}
        </p>
      </div>

      <button type="button" size="sm" className="buton"  >
        Follow
      </button>
    </div>
  );
};

export default UserCard;
