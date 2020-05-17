import SocketIO from 'socket.io';
import { Socket } from 'socket.io';
import { Messages } from '../clases/messages';
import { Message } from '../clases/message';
import { Users } from '../clases/users';
import { User } from '../clases/user';

// TODO
/* 
    * limpiar groserias del chat con expreciones regulares.
    * guardar la informacion en una base de datos
*/

export const messages = new Messages();
export const usersOnline = new Users();

export const message = (client: Socket, io: SocketIO.Server) => {
    client.on('messages', (payload: Message) => {
        messages.addMessage(payload);
        io.emit('messages', payload)
    });
}

export const connectUser = (client: Socket,  io: SocketIO.Server) => {
    const user = new User(client.id);
    usersOnline.addUser(user);
}


export const disconnectUser = ( client: Socket, io: SocketIO.Server ) => {
    client.on('disconnect', () => {
        usersOnline.deleteUser( client.id );
        io.emit('active-users', usersOnline.getUsers());
    });
}

export const configUser = (client: Socket,  io: SocketIO.Server) => {
    client.on('config-user', (payload: { login: string } ) => {
        usersOnline.updateName(client.id, payload.login);
        io.emit('active-users', usersOnline.getUsers());
    });
}

export const getUsers = (client: Socket,  io: SocketIO.Server) => {
    client.on('get-users', () => {
        io.to( client.id ).emit('active-users', usersOnline.getUsers());
    });
} 


