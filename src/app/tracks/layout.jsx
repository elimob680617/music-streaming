export default function TracksLayout({ children }) {
  return (
    <>
      <aside className="bg-gray-300 w-80 flex justify-center items-center self-stretch text-3xl  text-pink-500 dark:bg-slate-800">
        Sidebar
      </aside>
      <main className="flex justify-center items-center flex-1 text-5xl">
        {children}
      </main>
    </>
  );
}
