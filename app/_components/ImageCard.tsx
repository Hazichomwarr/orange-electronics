// components/ui/ImageCard.tsx

export default function ImageCard({ src }: { src: string }) {
  return (
    <div className="overflow-hidden rounded-2xl group cursor-pointer">
      <img
        src={src}
        alt="Store front door"
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />

      {/* subtle overlay */}
      {/* <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition" /> */}
    </div>
  );
}
