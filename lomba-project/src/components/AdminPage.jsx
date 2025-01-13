import { auth, db } from '../firebase';
import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const AdminPage = async () => {
  const adminData = {
    name: 'Admin',
    email: 'admin@gmail.com',
    password: 'password123',
    role: 'admin',
  };

  try {
    const userCredential = await auth.createUserWithEmailAndPassword(adminData.email, adminData.password);
    const user = userCredential.user;

    await db.collection('users').doc(user.uid).set({
      name: adminData.name,
      email: adminData.email,
      role: adminData.role,
    });

    console.log('Akun admin berhasil dibuat');
  } catch (error) {
    console.error('Gagal membuat akun admin:', error);
  }
};

export default AdminPage;