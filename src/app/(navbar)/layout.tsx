import { Suspense } from "react";
// import Loading from '@/components/Loading';
import NavBar from "@/components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen">
      <NavBar />
      <Suspense
        fallback={
          <div className="flex flex-1 items-center justify-center">
            {/* <Loading isLoading={true} type='spinner' /> */}
          </div>
        }
      >
        <div className="flex flex-col rounded-xl p-4 m-4 w-full overflow-scroll bg-base-200">
          {children}
        </div>
      </Suspense>
    </div>
  );
}
