class User {
    private _name?: string;
    private readonly _login?: string;
    private _password?: string;
    private _grade?: number;

    static count: number = 0


    constructor(
        name?: string,
        login?: string,
        password?: string,
        grade?: number,
    ) {
        this._name = name;
        this._login = login;
        this._password = password;
        this._grade = grade;
        User.count++
    }

    get name(): string | undefined {return this._name}
    get login(): string | undefined {return this._login}
    get password(): string {return '********'}
    get grade(): string {return 'Неизвестное свойство grade'}


    set name(value: string) {this._name=value}
    set login(value: string) {console.log('Невозможно изменить логин!')}
    set password(value: string) {this._password=value}
    set grade(value: string) {console.log('Неизвестное свойство grade')}

    lq(user: User): boolean {
        return user._name === this._name
    }

    lt(user: User): boolean {
        return user._name === this._name
    }

    gt(user: User): boolean {
        return user._name === this._name
    }

    showInfo(): void {
        console.log(
            `Name: ${this._name}\nLogin: ${this._login}`
        )
    }

}

class SuperUser extends User{
    role?: string;

    static count: number = 0

    constructor(
        name?: string,
        login?: string,
        password?: string,
        role?: string
    ) {
        super(
            name,
            login,
            password,
        );
        this.role = role
        SuperUser.count++
    }

    showInfo(): void {
        console.log(
            `Name: ${this.name}\nLogin: ${this.login}\nRole: ${this.role}`
        )
    }
}
