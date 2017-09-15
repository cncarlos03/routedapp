onsubmit(nameForm) {
    this.common.addNewName(nameForm.value.fname,
    nameForm.value.lname);
    nameForm.reset();
}