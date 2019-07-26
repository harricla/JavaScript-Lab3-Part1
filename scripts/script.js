class AddressBook {
  constructor() {
    this.contacts = [];
  }
  add(name, email, phone, relation) {
    let newContact = new Contact(name, email, phone, relation);
    this.contacts.push(newContact);
  }
  delete(name) {
    const index = this.contacts.findIndex(contact => {
      return contact.name === name;
    });
    this.contacts.splice(index, 1);
  }
  deleteByEmail(email) {
    const index = this.contacts.findIndex(contact => {
      return contact.email === email;
    });
    this.contacts.splice(index, 1);
  }
  print() {
    for (let i = 0; i < this.contacts.length; i++) {
      console.log(this.contacts[i]);
    }
  }
}

class Contact {
  constructor(name, email, phone, relation) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.relation = relation;
  }
}

const addressBook = new AddressBook();
// addressBook.print();
addressBook.add();
addressBook.add("Cody", "codyjrose@gmail.com", "6165703516", "husband");
