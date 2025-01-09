import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
  } from 'firebase/auth';
  import { doc, setDoc, getDoc } from 'firebase/firestore';
  import { auth, db } from '../firebase';
  
    // Register
    export const registerUser = async (name, email, password) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        await setDoc(doc(db, 'users', user.uid), {
          name: name,
          email: email,
          role: "user",
          createdAt: new Date()
        });
    
        return { success: true };
      } catch (error) {
        console.error('Registration error:', error);
        return { success: false, error: error.message };
      }
    };
    
    // Login
    export const loginUser = async (email, password) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        return { success: true };
      } catch (error) {
        console.error('Login error:', error);
        return { success: false, error: error.message };
      }
    };
    
    // Logout
    export const logoutUser = async () => {
      try {
        await signOut(auth);
        return { success: true };
      } catch (error) {
        console.error('Logout error:', error);
        return { success: false, error: error.message };
      }
    };
    
    // Get user data
    export const getUserData = async (uid) => {
      try {
        const userDoc = await getDoc(doc(db, 'users', uid));
        if (userDoc.exists()) {
          return { success: true, data: userDoc.data() };
        }
        return { success: false, error: 'User not found' };
      } catch (error) {
        console.error('Get user error:', error);
        return { success: false, error: error.message };
      }
    };