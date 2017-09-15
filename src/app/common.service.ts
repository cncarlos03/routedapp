addNewName(firstname: string, Lastname: string){
    this.nameObject = {
        firstName: firstname,
        lastName: lastname
    };

    this.cmNameCollection.push(this.nameObject);
}

getNames() Array<object>{
    return this.cmNameCollection;
}