class NotAvailableMesa extends Error {
  constructor(message) {
    super(message);
    this.name = "NotAvailableMesa";
    this.status = 400;
  }
}

module.exports = NotAvailableMesa;
