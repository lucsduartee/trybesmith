enum HTTPStatusCode {
  OK = 200,
  CREATED,
  BAD_REQUEST = 400,
  UNAUTHORIZED,
  FORBIDDEN,
  NOT_FOUND,
  CONFLICT = 409,
  UNPROCESSABLE = 422,
  INTERNAL_SERVER_ERROR = 500,
}

export default HTTPStatusCode;