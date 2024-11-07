import { FaLocationArrow } from "react-icons/fa";
export default function Home() {
  return (
    <section className="min-h-[calc(100vh-170px)] flex flex-col items-center justify-center gap-6 py-20 text-center">
      <h1 className="text-4xl font-bold">Welcome to LinkView</h1>

      <p className="max-w-md text-lg text-gray-600">
        它允许用户轻松地收藏自己喜欢的网址并进行分类
      </p>

      <div className="flex items-center gap-2 text-primary">
        <span className="text-lg font-medium">Let's get started!</span>
        <FaLocationArrow className="h-5 w-5" />
      </div>
    </section>
  );
}
