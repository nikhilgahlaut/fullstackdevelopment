class User{
    constructor(username,password){
        this.name = username;
        this.Password = password;
    }

    get password(){
        return this.Password.replace(/./g,'*')

    }
    set password(newPassword){
        const passwordchecker = /^(?=.*[0-9])(?=.*[A-Z]).{8,}$/g;
        if(passwordchecker.test(newPassword)){
            return this.Password = newPassword;
        }
        else{
            console.log(`Error: Passowrd must be at least 8 charachter long and contain at least one number and one uppercase`)
        }

    }
}


const user = new User(`mithun`,`password123`)
// user.password = `password123`
console.log(user.password)