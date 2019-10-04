import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor() { }

  public cifrar( name: string) {
    return 'eyJhbGciOiJSUzI1NiJ9.eyJwYXNzd29yZCI6IjEyMzQiLCJuYW1lIjoiSm9uYXRhbiIsImVtYWlsIjoiam9ueUBzdHJhdG9zbWV4LmNvbSJ9.AZcxz7l--pwN03f3B6iZOvWExIZehluhijNXdqko98aERouIHDTO5RGdp1esGskrdTqw8xeUplYvi9_CPjlDiKYEByvmaHSC1p72Z4XIq_jCPl7XuTrGiYejA5AhseQBIz1p52CuC57NsSCITUQqXdf37oqUF9DglXoHw91S2OcV8zFokF7unhJqDQnzq6GjZL7TleegiY0Rfz2EeXzxXw8rEP8jwaViP7FassmHp1P3YesnmKCZxrcSKp64pM2ZYtA1ClQ__M8UJIDFHRCGJZAlGeXvw1MHYy4-1vkK4_jdgavYuXdIUS5knoI2x96XSriV1Yd9T1ig9iBPtNixFQ';
  }
}
