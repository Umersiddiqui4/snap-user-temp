
import { ID, Query } from "appwrite";

import { appwriteConfig, account, databases, storage, avatars } from "./appwrite";




export async function getUsers() {
  
  
    try {
      const users = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        
      );
  
      if (!users) throw Error;
  
      return users;
    } catch (error) {
      console.log(error);
    }
  }
  