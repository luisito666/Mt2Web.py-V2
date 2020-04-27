import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// Importando componentes.
import { NavbarComponent } from './navbar/navbar.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { UserManagerPlayersComponent } from './user-manager/user-manager-players.component';
import { UserManagerPasswdComponent } from './user-manager/user-manager-passwd.component';
import { UserManagerDonationsComponent } from './user-manager/user-manager-donations.component';
import { MainManagerComponent } from './user-manager/main-manager.components';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login/login_form.component'

// Widgets
// Guild
import { GuildsComponent } from './wigets/guilds/guilds.component';
import { ListGuildComponent } from './wigets/guilds/list-guild.component'
// Players
import { PlayersComponent } from './wigets/players/players.component';
import { ListPlayersComponent } from './wigets/players/list-player.component';
// Statics
import { StaticsComponent } from './wigets/statics/statics.component';
import { SidebarComponent } from './wigets/sidebar/sidebar.component';


@NgModule({
    declarations: [
        NavbarComponent,
        UserManagerComponent,
        UserManagerPlayersComponent,
        UserManagerPasswdComponent,
        UserManagerDonationsComponent,
        PlayersComponent,
        GuildsComponent,
        LoginComponent,
        StaticsComponent,
        SidebarComponent,
        MainManagerComponent,
        LoginFormComponent,
        ListGuildComponent,
        ListPlayersComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule
    ],
    exports: [
        NavbarComponent,
        UserManagerComponent,
        LoginComponent,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
})
export class SharedModule {}
