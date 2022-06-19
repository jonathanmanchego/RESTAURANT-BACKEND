class InvalidUserError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidUserError";
    this.status = 400;
  }
}

module.exports = InvalidUserError;
