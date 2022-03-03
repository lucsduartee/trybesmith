import HTTPStatusCode from '../Enums/HTTPStatusCode';
import Messages from '../Enums/Messages';

export default interface CustomError {
  code: HTTPStatusCode;
  error: Messages;
}