class InvalidUserError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidUserError";
  }
}

module.exports = InvalidUserError;
