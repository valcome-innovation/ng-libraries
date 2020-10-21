import BasicProfile = gapi.auth2.BasicProfile;

export type SocialProvider = 'FACEBOOK' | 'GOOGLE';

export interface FbUser {
  id: string;
  name: string;
  first_name: string;
  last_name: string;
  email: string;
}

export class SocialUser {
  public provider: SocialProvider;
  public id: string;
  public email: string;
  public name: string;
  public photoUrl: string;
  public firstName: string;
  public lastName: string;
  public authToken: string;

  public idToken?: string; // Reference https://developers.google.com/identity/sign-in/web/backend-auth

  public response: FbUser | BasicProfile;

  public constructor(provider: SocialProvider, id: string, email: string, name: string, photoUrl: string,
                     firstName: string, lastName: string, authToken: string, response: any) {
    this.provider = provider;
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
