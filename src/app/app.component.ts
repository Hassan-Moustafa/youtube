import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'youtube';

  authUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  clientId = '742807933429-jhpvdhlqqltca6ikcevcddhji48e3itk.apps.googleusercontent.com';
  clientSecret = 'WCuamXhFB7zPI4C54aFiBvtA';
  responseType = 'token';
  redirectUri = 'http://localhost:4200/redirect';
  scope = 'https://www.googleapis.com/auth/youtube.force-ssl';

  constructor(private http: HttpClient) {}



  async authenticateUser() {

    const httpParams = new HttpParams({
      fromString: `client_id=${this.clientId}&response_type=${this.responseType}&redirect_uri=${this.redirectUri}&scope=${this.scope}`
    });
    // httpParams.append('client_id', this.clientId);
    // httpParams.append('response_type', this.responseType);
    // httpParams.append('redirect_uri', this.redirectUri);
    // httpParams.append('scope', this.scope);
    // httpParams.append('client_secret', this.clientSecret);

    const response = await this.http.get(this.authUrl, {
      params: httpParams
    }).toPromise();

    console.log(response);
  }
}
