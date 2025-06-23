import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-6 mt-16">
      <div className="container mx-auto flex flex-col items-center justify-center gap-2">
        <div className="flex items-center gap-3">
          <Image src="/icons/demography.gif" alt="Odisha Data Portal Logo" width={36} height={36} className="rounded-full" />
          <span className="text-lg font-semibold tracking-wide">Odisha Data Portal</span>
        </div>
        <span className="text-xs text-indigo-200">&copy; {new Date().getFullYear()} Odisha Data Portal. All rights reserved.</span>
      </div>
    </footer>
  );
}
