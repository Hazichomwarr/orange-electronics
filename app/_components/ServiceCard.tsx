// components/ui/ServiceCard.tsx
interface Props {
  image: string;
  title: string;
  description?: string;
}
export default function ServiceCard({ image, title, description }: Props) {
  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur-md shadow-lg overflow-hidden hover:scale-[1.02] transition">
      {/* Image */}
      <img src={image} alt={title} className="h-64 w-full object-cover" />

      {/* Content */}
      <div className="p-6 text-center space-y-3">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

        <p className="text-gray-600 text-sm">{description}</p>

        <button className="mt-3 rounded-full bg-pink-600 px-5 py-2 text-white text-sm hover:bg-pink-700 transition">
          View Services
        </button>
      </div>
    </div>
  );
}
