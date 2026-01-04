export class UserBuilder {
  private user: any = {
    name: '',
    email: '',
    password: '',
  }

  withName(name: string) {
    this.user.name = name
    return this
  }

  withEmail(email: string) {
    this.user.email = email
    return this
  }

  withPassword(password: string) {
    this.user.password = password
    return this
  }

  build() {
    return this.user
  }
}

export class SchoolBuilder {
  private school: any = {
    name: '',
    address: '',
  }

  withName(name: string) {
    this.school.name = name
    return this
  }

  withAddress(address: string) {
    this.school.address = address
    return this
  }

  build() {
    return this.school
  }
}