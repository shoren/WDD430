export class Contacts{

public id: string;
public name: string;
public email: string;
public phoneNumber: string;
public imageUrl: string;
public group: string;

constructor(id: string, name: string, email: string, phoneNumber: string, imageUrl: string, group: string){
    this.id = id;
    this.name = name;
    this.email = email;
    this.phoneNumber = phoneNumber;
    this.imageUrl = imageUrl;
    this.group = group;
}

}