export class Account {
  constructor(
    public email: string,
    public password: string,
    public confirm?: string
  ) {}
}
