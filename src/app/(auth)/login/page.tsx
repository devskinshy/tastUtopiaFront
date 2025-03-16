import Input from '@/components/input';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 gap-12">
      <div className="flex flex-col gap-3 w-full items-center z-10">
        <Image
          src="/assets/images/image_logo.png"
          alt="logo"
          width={240}
          height={50}
        />
        <h2 className="font-pretendard font-medium text-base text-[var(--color-grey-160)] text-center">
          나만의 유토피아를 공유하고 <br /> 주민들을 모아보세요!
        </h2>
      </div>
      <div className="flex flex-col w-full">
        <div className="flex flex-col gap-2 mb-3">
          <Input name="id" placeholder="아이디" />
          {/* {errors.map((error, index) => {
            return (
              <span key={index} className="text-red-500 font-medium">
                {error}
              </span>
            );
          })} */}
        </div>
        <div className="flex flex-col gap-2 mb-4">
          <Input name="password" type="password" placeholder="패스워드" />
          {/* {errors.map((error, index) => {
            return (
              <span key={index} className="text-red-500 font-medium">
                {error}
              </span>
            );
          })} */}
        </div>
        <div className="flex flex-row justify-center mb-6">
          <div className="flex flex-row gap-2 items-center">
            <span className="font-pretendard font-normal text-sm text-[var(--color-grey-80)]">
              아이디 찾기
            </span>
            <div className="w-px h-2/3 bg-[var(--color-grey-20)]" />
            <span className="font-pretendard font-normal text-sm text-[var(--color-grey-80)]">
              비밀번호 재설정
            </span>
          </div>
        </div>
        <div className="p-[18px] bg-[var(--color-primary-main)] rounded-md font-pretendard font-medium text-base text-white text-center mb-8">
          로그인
        </div>
        <div className="flex flex-col justify-center py-5 bg-[var(--color-grey-20)] rounded-md font-pretendard font-normal text-sm text-[var(--color-grey-160)] text-center gap-2">
          <span className="font-pretendard font-normal text-sm text-[var(--color-grey-80)]">
            회원 가입하고 <br /> 나만의 맛집 유토피아를 만들고 공유해보세요!
          </span>
          <Link href="/signup">
            <span className="font-pretendard font-medium text-base text-[var(--color-primary-main)]">
              회원가입
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
