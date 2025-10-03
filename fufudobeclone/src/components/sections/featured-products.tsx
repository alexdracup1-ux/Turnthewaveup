import Image from 'next/image';

const FeaturedProducts = () => {
  return (
    <section className="container py-8 sm:py-12 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Card 1: Adobe Premiere */}
        <div className="lg:col-span-7 bg-card text-card-foreground rounded-2xl overflow-hidden flex flex-col min-h-[500px]">
          <div className="p-8 md:p-10 flex-shrink-0">
            <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">Adobe Premiere</p>
            <h3 className="mt-4 text-[32px] font-bold leading-[40px] tracking-[-0.01em]">Introducing Premiere on iPhone.</h3>
            <p className="mt-3 text-base text-muted-foreground">Meet the fast, free, and focused mobile video editing app.</p>
            <a
              href="https://www.adobe.com/products/premiere/app.html"
              className="mt-6 inline-block rounded-full border border-foreground bg-transparent px-6 py-3 text-base font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              Learn more
            </a>
          </div>
          <div className="flex-1 flex items-end justify-end pr-8 md:pr-10 pb-4">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/24a2c4e9-a79a-4cc9-ab49-7943b561b083-adobe-com/assets/images/media_1ad7110c98e71b7a61dd7b0b93dfd1eaf34599624-10.png"
              alt="A person holding a phone showing the Adobe Premiere video editing interface."
              width={500}
              height={329}
              className="w-full max-w-[700px] h-auto object-contain"
            />
          </div>
        </div>

        {/* Card 2: Acrobat Studio */}
        <div className="lg:col-span-5 rounded-2xl bg-[#F5E6F3] p-8 md:p-10 text-[#2C2F36] flex flex-col min-h-[500px]">
          <div className="flex-shrink-0">
            <h3 className="text-[32px] font-bold leading-[40px] tracking-[-0.01em]">Meet the new Acrobat Studio.</h3>
            <p className="mt-3 text-base">Insights, content creation, and trusted PDF tools in one place.</p>
            <a
              href="https://www.adobe.com/acrobat.html"
              className="mt-6 inline-block rounded-full border border-[#2C2F36] bg-transparent px-6 py-3 text-base font-semibold text-[#2C2F36] transition-colors hover:bg-black/10"
            >
              Learn more
            </a>
          </div>
          <div className="flex-1 flex items-end justify-center pt-8">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/24a2c4e9-a79a-4cc9-ab49-7943b561b083-adobe-com/assets/images/media_18bef5f54f87416f03c045aadd1e5438f2276ed73-13.png"
              alt="Acrobat Studio application interface, showing 'PDF Spaces' and 'Create with a template'."
              width={430}
              height={240}
              className="w-full h-auto max-h-[280px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;