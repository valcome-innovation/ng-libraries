export type SocialProvider = 'FACEBOOK' | 'GOOGLE';
export type LoginType = 'tv' | 'client';

export interface GoogleTokenClaims {
  sub: string;
  email: string;
  email_verified: string;
  name: string;
  picture: string;
  given_name: string;
  family_name: string;
}

export interface FbUser {
  id: string;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
}

export type SocialUserResponse = FbUser | GoogleTokenClaims;

export class SocialUser {
  public provider: SocialProvider;
  public loginType: LoginType;
  public id: string;
  public email: string;
  public name: string;
  public photoUrl: string;
  public firstName: string;
  public lastName: string;
  public authToken: string;

  public idToken?: string; // Reference https://developers.google.com/identity/sign-in/web/backend-auth

  public response: SocialUserResponse;

  public constructor(provider: SocialProvider, loginType: LoginType, id: string, email: string, name: string,
                     photoUrl: string, firstName: string, lastName: string, authToken: string,
                     response: SocialUserResponse) {
    this.provider = provider;
    this.loginType = loginType;
    this.id = id;
    this.email = email;
    this.name = name;
    this.photoUrl = photoUrl;
    this.firstName = firstName;
    this.lastName = lastName;
    this.authToken = authToken;
    this.response = response;
  }
}
