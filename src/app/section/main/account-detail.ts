export class AccountDetail {
  constructor(
    public email: string,
    public password: string,
    public confirm?: string
  ) {}
}
