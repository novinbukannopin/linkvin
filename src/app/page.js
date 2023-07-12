import Blog from "./components/Blog";
import Header from "./components/Header";
import Linked from "./components/Linked";
import ModalConfirm from "./utils/ModalConfirm";

export default function Home() {
  return (
    <div className="container mx-auto pt-[84px] pb-[32px] px-[24px] sm:w-1/3 bg-custom-gradient-1  flex flex-col justify-between">
      <div className="">
        <Header />
        <div className="flex flex-col gap-6 mb-6">
          <h5>My Social Media</h5>

          <ModalConfirm
            icon={"github"}
            title={"Github"}
            link={"https://github.com/novinbukannopin"}
          />
          <ModalConfirm
            icon={"linkedin"}
            title={"Linkedin"}
            link={"https://www.linkedin.com/in/novin-ardian-yulianto/"}
          />
          <ModalConfirm
            icon={"instagram"}
            title={"Instagram"}
            link={"https://www.instagram.com/novinbukannopin/"}
          />
          <ModalConfirm
            icon={"discord"}
            title={"Discord"}
            link={"https://discordapp.com/users/547024593127211019/"}
          />
        </div>
        <div className="flex justify-between items-center">
          <h5 className="py-6">My Recent Article</h5>
          <h5 className="py-6">more ...</h5>
        </div>
        <div className="flex flex-row gap-6 mb-6 overflow-x-scroll ">
          <Blog
            title={"Hello World"}
            createdAt={"12 December 2022"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsa? Quam in repudiandae ex ullam sit neque. Fugiat, ipsum consequatur asda akjlaksd oiasohdiahsod aosidhoai."
            }
          />
          <Blog
            title={"Hello World"}
            createdAt={"12 December 2022"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsa? Quam in repudiandae ex ullam sit neque. Fugiat, ipsum consequatur."
            }
          />
          <Blog
            title={"Hello World"}
            createdAt={"12 December 2022"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsa? Quam in repudiandae ex ullam sit neque. Fugiat, ipsum consequatur."
            }
          />
        </div>
      </div>
      <div className="text-center mt-5 text-sm">
        Created by <span className="font-bold">Novin</span>.
      </div>
    </div>
  );
}
