'use client';

import { useFormState } from 'react-dom';
import { createAccount } from './actions';
import { useFormStatus } from 'react-dom';
import { PASSWORD_MAX_LENGTH, PASSWORD_MIN_LENGTH } from '@/lib/constants';
import Input from '@/components/input';

export default function Signup() {
  const { pending } = useFormStatus();
  const [state, dispatch] = useFormState(createAccount, null);

  return (
    <form action={dispatch}>
      <div className="flex flex-col items-center p-5">
        <div className="flex flex-col gap-2 mb-6 w-full">
          <span className="font-pretendard font-medium text-base text-[var(--color-grey-160)]">
            아이디
          </span>
          <div className="flex flex-row gap-[10px]">
            <Input
              name="id"
              placeholder="아이디"
              defaultValue={state?.id ?? ''}
              errors={state?.errors?.fieldErrors.id}
              required
              minLength={4}
              maxLength={12}
            />
            <div className="bg-[var(--color-primary-main)] rounded-md px-[28px] py-[13.5px]">
              <span className="font-pretendard font-normal text-sm text-[var(--color-grey-170)] flex">
                중복확인
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-6 w-full">
          <span className="font-pretendard font-medium text-base text-[var(--color-grey-160)]">
            비밀번호
          </span>
          <div className="flex flex-col gap-2">
            <Input
              name="password"
              type="password"
              placeholder="패스워드"
              defaultValue={state?.password ?? ''}
              errors={state?.errors?.fieldErrors.password}
              required
              minLength={PASSWORD_MIN_LENGTH}
              maxLength={PASSWORD_MAX_LENGTH}
            />
            {/* {errors.map((error, index) => {
            return (
              <span key={index} className="text-red-500 font-medium">
                {error}
              </span>
            );
          })} */}
          </div>
          <div className="flex flex-col gap-2">
            <Input
              name="confirm_password"
              type="password"
              placeholder="패스워드 확인"
              defaultValue={state?.confirm_password ?? ''}
              errors={state?.errors?.fieldErrors.confirm_password}
              required
              minLength={PASSWORD_MIN_LENGTH}
              maxLength={PASSWORD_MAX_LENGTH}
            />
            {/* {errors.map((error, index) => {
            return (
              <span key={index} className="text-red-500 font-medium">
                {error}
              </span>
            );
          })} */}
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-6 w-full">
          <span className="font-pretendard font-medium text-base text-[var(--color-grey-160)]">
            닉네임
          </span>
          <div className="flex flex-row gap-[10px] w-full">
            <Input
              name="nickname"
              placeholder="닉네임"
              errors={state?.errors?.fieldErrors.nickname}
              required
              minLength={5}
            />
            <div className="bg-[var(--color-primary-main)] rounded-md px-[28px] py-[13.5px]">
              <span className="font-pretendard font-normal text-sm text-[var(--color-grey-170)] flex">
                중복확인
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-8 w-full">
          <span className="font-pretendard font-medium text-base text-[var(--color-grey-160)]">
            이메일
          </span>
          <div className="flex flex-row gap-[10px] items-center">
            <Input
              name="email"
              placeholder="이메일"
              defaultValue={state?.email ?? ''}
              errors={state?.errors?.fieldErrors.email}
              required
            />
            <span className="font-pretendard font-medium text-base text-[#CCCCCC]">
              @
            </span>
            <Input name="emailDomain" placeholder="선택" />
          </div>
        </div>
        <div className="flex flex-row gap-2 w-full mb-8">
          <input
            type="checkbox"
            name="agreement"
            className="w-5 h-5 rounded-sm border-1 bg-transparent border-[#E7E7E7] checked:bg-[var(--color-primary-main)] checked:border-none"
          />
          <span className="font-pretendard font-normal text-sm text-[var(--color-grey-170)]">
            이용약관 및 개인정보 처리방침에 동의합니다.
          </span>
        </div>
        <button
          type="submit"
          disabled={pending}
          className="p-[18px] bg-[var(--color-primary-main)] rounded-md font-pretendard font-medium text-base text-white text-center w-full disabled:bg-[var(--color-grey-30)] disabled:text-[var(--color-grey-80)]] disabled:cursor-not-allowed"
        >
          가입하기
        </button>
      </div>
    </form>
  );
}
