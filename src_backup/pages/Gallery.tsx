import { Card } from "@/components/ui/Card";
import { GALLERY_IMAGES } from "@/data/mockData";
import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";

export default function Gallery() {
    return (
        <PageTransition className="space-y-6">
            <SEO title="Gallery" description="Photos from the tournament." />
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Gallery</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {GALLERY_IMAGES.map((img: any) => (
                    <Card key={img.id} className="overflow-hidden">
                        <div className="aspect-square relative">
                            <img
                                src={img.src}
                                alt={img.caption}
                                className="absolute inset-0 h-full w-full object-cover transition-transform hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-center text-xs text-white">
                                {img.caption}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </PageTransition>
    );
}
