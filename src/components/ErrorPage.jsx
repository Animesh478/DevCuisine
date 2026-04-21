import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="grid min-h-full place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <h1 className="text-base font-semibold text-indigo-400">OOPS!!</h1>
      <h2 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-stone-300 sm:text-7xl">
        Something went wrong. {err.status} {err.statusText}
      </h2>
    </div>
  );
}

export default ErrorPage;
