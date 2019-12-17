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
import { PlayersComponent } from './wigets/players.component';
import { GuildsComponent } from './wigets/guilds.component';
import { LoginComponent } from './login/login.component';
import { StaticsComponent } from './wigets/statics.component';
import { SidebarComponent } from './wigets/sidebar.component';


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
        LoginComponent
    ],
    providers: [],
})
export class SharedModule {}
