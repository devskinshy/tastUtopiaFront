import {
  EMAIL_MAX_LENGTH,
  EMAIL_MIN_LENGTH,
  EMAIL_REGEX,
  EMAIL_REGEX_ERROR,
  PASSWORD_MAX_LENGTH,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from '@/lib/constants';
import { z } from 'zod';

const checkPassword = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const formSchema = z
  .object({
    id: z
      .string()
      .min(EMAIL_MIN_LENGTH)
      .max(EMAIL_MAX_LENGTH)
      .regex(EMAIL_REGEX, EMAIL_REGEX_ERROR),
    password: z
      .string({
        required_error: '비밀번호를 입력해주세요.',
      })
      .min(PASSWORD_MIN_LENGTH)
      .max(PASSWORD_MAX_LENGTH)
      .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirm_password: z
      .string({
        required_error: '비밀번호 확인을 입력해주세요.',
      })
      .min(PASSWORD_MIN_LENGTH),
    nickname: z
      .string({
        required_error: '닉네임을 입력해주세요.',
      })
      .min(5),
    email: z.string({
      required_error: '이메일을 입력해주세요.',
    }),
  })
  .refine(checkPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirm_password'],
  });

export async function createAccount(prevState: any, formData: FormData) {
  const data = {
    id: formData.get('id'),
    email: formData.get('email'),
    password: formData.get('password'),
    nickname: formData.get('nickname'),
    confirm_password: formData.get('confirm_password'),
  };

  const result = await formSchema.safeParseAsync(data);

  if (!result.success) {
    return {
      id: data.id?.toString(),
      email: data.email?.toString(),
      password: data.password?.toString(),
      confirm_password: data.confirm_password?.toString(),
      nickname: data.nickname?.toString(),
      errors: result.error?.flatten(),
    };
  } else {
    console.log('회원가입 성공');
    console.log(result.data);
  }
}
