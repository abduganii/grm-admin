import Container from "../../components/container/index";

export default function LognPage() {
  return (
    <Container className="mt-[33px]">
      <p className="flex  items-center mb-[104px] gap-4 text-[12px] leading-[14px] text-[#212121]">
        <span> Главная </span> | <span>Войти в кабинет</span>
      </p>
      <div className="flex  gap-[92px]">
        <div className="w-full  max-w-[360px]">
          <img src="/logo.svg" className="w-[175px] h-[115px]" alt="image" />
          <p className="text-[#212121] leading-[17px] text-[15px] mb-[31px]">
            Автоматизация процесса: производство, склад, продажи и контроль
            процессов для роста вашего бизнеса.
          </p>

          <input className="bg-[#EDECE3] text-[15px] leading-[18px] font-medium px-[13px] py-[20px] border-none outline-none rounded-none mb-[54px] w-full max-w-[296px]" />

          <button className="py-[12px] px-[25px] cursor-pointer bg-[#282828] text-[15px] leading-[18px] text-white">
            Войти
          </button>
        </div>
      </div>
    </Container>
  );
}
