import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountSend } from '../../interfaces/account';
import { User } from '../../interfaces/user.simple';
import { environment } from '../../../environments/environment';


@Injectable()
export class HttpService {

  guilds: any;
  players: any;

  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  private get_headers() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return httpOptions;
  }

  private get(url: string) {
    return this.http.get(url);
  }

  private post(url: string, body: any) {
    const data = JSON.stringify(body);
    return this.http.post(url, body, this.get_headers());
  }

  async get_guilds() {
    const url = `${this.baseUrl}/api/guild_rank/`;
    this.guilds = await this.get(url).toPromise();
  }

  async get_players() {
    const url = `${this.baseUrl}/api/player_rank/`;
    this.players = await this.get(url).toPromise();
  }

  create_user(userForm: AccountSend) {
    const url = `${this.baseUrl}/api/signup/`;
    return this.post(url, userForm);
  }

  verify_user(username: string) {
    const url = `${this.baseUrl}/api/info/${username}`;
    return this.get(url);
  }

  login(LoginData: User) {
    const url = `${this.baseUrl}/api/token/`;
    const body = JSON.stringify(LoginData);
    return this.http.post(url, body, this.get_headers());
  }

}
