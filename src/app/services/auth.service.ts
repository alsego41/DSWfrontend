import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token : String | null = localStorage.getItem("token")
  private checkTokenUrl = "http://localhost:3000/user/verify"

  constructor() {}

  async login() {
    if (this.token) {
      const res = await fetch(this.checkTokenUrl, {
        method: 'POST',
        body: JSON.stringify({token: this.token}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      if (res.status === 200){
        const json = await res.json()
        console.log(json.payload)
        return true;
      } else {
        console.log(res.status)
        return false
      }
    } else {
      return false
    }
  }
}
