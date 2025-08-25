const User = {
    _email : 'P@raj.put',
    _password : 'pan@1`23.',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);