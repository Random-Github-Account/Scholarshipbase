import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private fireauth: AngularFireAuth, private router: Router) {}

  // Login method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/dashboard']);
    }, err => {
      alert('Something went wrong');
      this.router.navigate(['/login']);
    });
  }

  // Register method
  register(email: string, password: string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
      alert('Registration Successful');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    });
  }

  // Sign out
  logout() {
    this.fireauth.signOut().then(() => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    });
  }

  // Get user email
  async getUserEmail(): Promise<string | null> {
    let userEmail = localStorage.getItem('userEmail');
  
    if (userEmail) {
      // If the email is already in local storage, return it immediately
      return userEmail;
    }
  
    const user = await this.fireauth.currentUser;
  
    if (user) {
      // If the user is logged in, store the email in local storage for future use
      userEmail = user.email || null;
      localStorage.setItem('userEmail', userEmail || '');
    }
  
    return userEmail;
  }
}
