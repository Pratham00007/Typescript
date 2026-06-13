function user(name: string){
    return name;
}

function a(name:string, age: number){}

function ab(name:string,age: number = 5){}

// need to pass 2 argument minimum
a("jk",5)
// 2nd argument is by defualt but can be change by passing
ab("jh")