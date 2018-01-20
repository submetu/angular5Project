
export interface UserInterface {
    id: String
    username: String
    email: String
    firstname: String
    lastname: String
    country: String
    language: String
    currency: String
    owner_id: String
    site_id: String
    external_id: String
    level_id: String
    status: String
    created_at: String
    updated_at: String
    balance: String
    params: Array<Object>
    balance_usd: Number
}
export class User {

    private id: String;
    private username: String;
    private email: String;
    private firstname: String;
    private lastname: String;
    private country: String;
    private language: String;
    private currency: String;
    private owner_id: String;
    private site_id: String;
    private external_id: String;
    private level_id: String;
    private status: String;
    private created_at: String;
    private updated_at: String;
    private balance: String;
    private params: Array<Object>;
    private balance_usd: Number;

    constructor(private userObject: UserInterface) {
        this.id = userObject.id;
        this.username = userObject.username;
        this.email = userObject.email;
        this.firstname = userObject.firstname;
        this.lastname = userObject.lastname;
        this.country = userObject.country;
        this.language = userObject.language;
        this.currency = userObject.currency;
        this.owner_id = userObject.owner_id;
        this.site_id = userObject.site_id;
        this.external_id = userObject.external_id;
        this.level_id = userObject.level_id;
        this.status = userObject.status;
        this.created_at = userObject.created_at;
        this.updated_at = userObject.updated_at;
        this.balance = userObject.balance;
        this.params = userObject.params;
        this.balance_usd = userObject.balance_usd;
    }
}