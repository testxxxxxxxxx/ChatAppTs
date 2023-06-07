declare class User {
    private id;
    private client;
    private login;
    private password;
    private db;
    private table;
    private collection;
    constructor(id: number, table: string);
    getLogin(): any;
    getPassword(): any;
}
export default User;
