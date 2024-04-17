type ExpenseProps = {
  _id?: string;
  title: string;
  color: string;
  amount: number;
};

export class Expense {
  public _id?: string;
  public title: string;
  public color: string;
  public amount: number;

  constructor({ _id, title, color, amount }: ExpenseProps) {
    this._id = _id;
    this.title = title;
    this.color = color;
    this.amount = amount;
  }
}
