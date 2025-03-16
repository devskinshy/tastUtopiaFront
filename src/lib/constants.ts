export const EMAIL_MIN_LENGTH = 4;
export const EMAIL_MAX_LENGTH = 12;
export const EMAIL_REGEX = new RegExp(/^[a-z][a-z0-9]{3,11}$/);
export const EMAIL_REGEX_ERROR =
  '영문 소문자와 숫자만 사용하여, 영문 소문자로 시작하는\n4~12자의 아이디를 입력해주세요.';
export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 20;
export const PASSWORD_REGEX = new RegExp(
  /^(?=.*[a-z])(?=.*[\d\W])(?=.{6,20}$)[a-z\d\W]+$/,
);
export const PASSWORD_REGEX_ERROR =
  '영문 소문자와, 숫자, 특수문자 중 2가지 이상을 조합하여\n6~20자로 입력해주세요.';
