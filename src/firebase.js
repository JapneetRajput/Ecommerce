
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getDatabase } from '@firebase/database';
import { getStorage } from "@firebase/storage";
const firebaseConfig = {
 apiKey: "AIzaSyBZfdKo4c6ME-QsVmUCo224iqrvAnGFsCU",
 authDomain: "electronixx-dce22.firebaseapp.com",
 projectId: "electronixx-dce22",
 storageBucket: "electronixx-dce22.appspot.com",
 messagingSenderId: "946964256032",
 appId: "1:946964256032:web:84adcc18106ba77dceb345"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const dbRealtime = getDatabase(app);
export const storage = getStorage(app);