import * as firebase from 'firebase';
import { firebaseConfig } from '../configs/firebase';
let instance = null;

class FirebaseService{
  constructor(){
    if(!instance){
      this.app = firebase.initializeApp(firebaseConfig);
    }
    return instance
  }
}

const FirebaseService = new FirebaseService().app
export default FirebaseService