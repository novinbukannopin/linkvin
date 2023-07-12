import Blog from "./components/Blog";
import Header from "./components/Header";
import Linked from "./components/Linked";

export default function Home() {
  return (
    <div className="container mx-auto pt-[84px] pb-[32px] px-[24px] sm:w-1/3 bg-primary  flex flex-col justify-between">
      <div className="">
        <Header />
        <div className="flex flex-col gap-6 mb-6">
          <h5>My Social Media</h5>
          <Linked
            icon={"instagram"}
            title={"Instagram"}
            link={"https://instagram.com"}
          />
          <Linked
            icon={"github"}
            title={"Github"}
            link={"https://github.com"}
          />
          <Linked
            icon={"linkedin"}
            title={"Linkedin"}
            link={"https://linkedin.com"}
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
          <Blog
            title={"Hello World"}
            createdAt={"12 December 2022"}
            content={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsa? Quam in repudiandae ex ullam sit neque. Fugiat, ipsum consequatur."
            }
          />
        </div>
      </div>
      <div className="text-center mt-5 text-sm">Created by Novin.</div>
    </div>
  );
}
