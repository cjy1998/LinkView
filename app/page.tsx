import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
export default function Home() {
  return (
    <section className="flex min-h-[calc(100vh-170px)] flex-col items-center justify-center gap-6 px-4 py-20 text-center sm:px-0">
      <h1 className="text-4xl font-bold">
        Welcome to <p className="inline-block text-primary">LinkView</p>
      </h1>

      <p className="max-w-md text-lg text-gray-600">
        它允许用户轻松地收藏自己喜欢的网址并进行分类
      </p>

      <Link
        prefetch
        className="flex items-center gap-2 text-primary"
        href="/login"
      >
        <span className="text-lg font-medium">Let&apos;s get started!</span>
        <FaLocationArrow className="h-5 w-5" />
      </Link>
    </section>
  );
}
