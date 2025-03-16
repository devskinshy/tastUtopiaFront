import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 gap-14 relative">
      <Image
        src="/assets/images/image_bg.png"
        alt="background"
        width={390}
        height={844}
        className="absolute top-0 left-0 w-full h-full"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
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
      <div className="flex flex-col gap-3 w-full z-10">
        <div className="rounded-lg bg-[#FEE500] w-full h-12 flex items-center justify-center p-4 font-pretendard font-medium text-sm relative text-[#343434]">
          <Image
            src="/assets/icons/icon_kakao.png"
            alt="kakao"
            width={24}
            height={24}
            className="absolute left-5"
          />
          카카오로 시작하기
        </div>
        <div className="rounded-lg bg-[#03C75A] w-full h-12 flex items-center justify-center p-4 font-pretendard font-medium text-sm relative text-[var(--color-grey-170)]">
          <Image
            src="/assets/icons/icon_naver.png"
            alt="naver"
            width={24}
            height={24}
            className="absolute left-5"
          />
          네이버로 시작하기
        </div>
        <div className="rounded-lg bg-[#F0F0F0] w-full h-12 flex items-center justify-center p-4 font-pretendard font-medium text-sm relative text-[#343434]">
          <Image
            src="/assets/icons/icon_google.png"
            alt="google"
            width={24}
            height={24}
            className="absolute left-5"
          />
          구글로 시작하기
        </div>
        <div className="rounded-lg bg-[#1877F2] w-full h-12 flex items-center justify-center p-4 font-pretendard font-medium text-sm relative text-[var(--color-grey-170)]">
          <Image
            src="/assets/icons/icon_naver.png"
            alt="facebook"
            width={24}
            height={24}
            className="absolute left-5"
          />
          페이스북으로 시작하기
        </div>
        <Link href="/login">
          <div className="rounded-lg bg-[#111111] bg-opacity-60 w-full h-12 flex items-center justify-center p-4 font-pretendard font-normal text-sm relative text-[var(--color-grey-170)]">
            다른 방법으로 시작하기
          </div>
        </Link>
      </div>
    </div>
  );
}
