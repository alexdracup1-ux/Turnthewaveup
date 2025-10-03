import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import React from 'react';

const ArrowLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
  <a href={href} className={`font-semibold text-base inline-flex items-center gap-2 group ${className}`}>
    {children}
    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
  </a>
);

const PlainLink = ({ href, children, isBold, className }: { href: string; children: React.ReactNode; isBold?: boolean; className?: string }) => (
  <a href={href} className={`text-base flex justify-between items-center group ${isBold ? 'font-bold' : 'font-normal'} ${className}`}>
    <span className="group-hover:underline">{children}</span>
    <span className="font-sans text-lg">›</span>
  </a>
);

export default function ProductGrid() {
  return (
    <section className="bg-background text-foreground py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1240px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          
          {/* Card 1: Adobe Firefly */}
          <div className="bg-firefly-black text-white rounded-2xl p-10 flex flex-col h-full overflow-hidden">
            <div className="flex-grow">
              <p className="text-xs font-bold tracking-widest mb-2">ADOBE FIREFLY</p>
              <h3 className="text-[32px] leading-[40px] font-bold tracking-[-0.01em] mb-4">The ultimate creative AI solution.</h3>
              <p className="text-base text-muted-foreground/80 mb-6">Create images, video, audio, and vector graphics in the Firefly app.</p>
              <ArrowLink href="#" className="text-white">Learn more</ArrowLink>
            </div>
            <div className="mt-10">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/24a2c4e9-a79a-4cc9-ab49-7943b561b083-adobe-com/assets/images/media_13fd08328f8ad86706c55d642e6b1baf5596a6ca6-8.png" 
                alt="A collage of AI-generated images from Adobe Firefly, showing a bee on a flower, a portrait, an iris flower, and a snowy landscape."
                width={380} 
                height={214}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Card 2: Adobe Express */}
          <div className="bg-gradient-to-br from-pink-gradient-start to-pink-gradient-end text-white rounded-2xl p-10 flex flex-col h-full overflow-hidden">
            <div className="flex-grow">
              <p className="text-xs font-bold tracking-widest mb-2">ADOBE EXPRESS</p>
              <h3 className="text-[32px] leading-[40px] font-bold tracking-[-0.01em] mb-4">Enhance your creative content. Even faster.</h3>
              <p className="text-base mb-6">Stand out everywhere with one-click animations, quick social clips, and effortless on-brand designs.</p>
              <ArrowLink href="#" className="text-white">Get Adobe Express free</ArrowLink>
            </div>
            <div className="mt-10 -mb-10 -mx-10 flex justify-center">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/24a2c4e9-a79a-4cc9-ab49-7943b561b083-adobe-com/assets/images/media_1407009edd328a4e3f93c37d7db18009b39ec5116-11.png" 
                alt="Adobe Express interface showing a user editing a social media post."
                width={380} 
                height={253}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          
          {/* Card 3: Creative Cloud, Acrobat, Explore */}
          <div className="rounded-2xl overflow-hidden flex flex-col h-full bg-stone-200">
            <div className="bg-gradient-to-br from-purple-gradient-start to-purple-gradient-end text-white p-10">
              <h4 className="text-2xl font-semibold mb-4">Creative Cloud</h4>
              <ul className="space-y-2">
                <li><PlainLink href="#" className="text-white">Creative Cloud Pro free trial</PlainLink></li>
                <li><PlainLink href="#" className="text-white">Creative Cloud for business</PlainLink></li>
                <li><PlainLink href="#" isBold className="text-white">Student pricing</PlainLink></li>
              </ul>
            </div>
            <div className="p-10 text-text-dark">
              <h4 className="text-2xl font-semibold mb-4">Acrobat</h4>
              <ul className="space-y-2">
                <li><PlainLink href="#">Acrobat free trial</PlainLink></li>
                <li><PlainLink href="#">Online PDF tools</PlainLink></li>
              </ul>
              <h4 className="text-2xl font-semibold mt-8 mb-4">Explore</h4>
              <ul className="space-y-2">
                <li><PlainLink href="#">View all products</PlainLink></li>
                <li><PlainLink href="#">See all plans and pricing</PlainLink></li>
              </ul>
            </div>
          </div>

          {/* Card 4: Amazing apps */}
          <div className="bg-stone-200 text-text-dark rounded-2xl p-10 flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-[32px] leading-[40px] font-bold tracking-[-0.01em] mb-4">Amazing apps. Endless possibilities.</h3>
              <p className="text-base mb-6">Create something beautiful, boost productivity, and deliver engaging customer experiences with Adobe software.</p>
              <ArrowLink href="#" className="text-text-dark">View all products</ArrowLink>
            </div>
            <div className="mt-10">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/24a2c4e9-a79a-4cc9-ab49-7943b561b083-adobe-com/assets/images/media_16291e9ebf89008f8d4336bff4858f117e5999a0d-24.png"
                alt="A grid of Adobe application icons including Illustrator, Photoshop, Creative Cloud, InDesign, Acrobat, Audition, After Effects, and Lightroom."
                width={380}
                height={160}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Card 5: Adobe GenStudio */}
          <div className="bg-gradient-to-br from-genstudio-gradient-start to-genstudio-gradient-end text-white rounded-2xl p-10 flex flex-col h-full overflow-hidden">
            <div className="flex-grow">
              <p className="text-xs font-bold tracking-widest mb-2 leading-snug">ADOBE GENSTUDIO FOR PERFORMANCE MARKETING</p>
              <h3 className="text-[32px] leading-[40px] font-bold tracking-[-0.01em] mt-2 mb-4">Empower marketing teams.</h3>
              <p className="text-base mb-6">Generate high-performing on-brand campaign content.</p>
              <ArrowLink href="#" className="text-white">Learn more</ArrowLink>
            </div>
            <div className="mt-10">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/24a2c4e9-a79a-4cc9-ab49-7943b561b083-adobe-com/assets/images/media_164251efb55e33a7b800f2bae68bd3ef19f877cec-12.png" 
                alt="Adobe GenStudio interface showing campaign generation for a car model."
                width={380} 
                height={345}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Card 6: In the news */}
          <div className="bg-card text-white rounded-2xl p-10 h-full">
            <h4 className="text-2xl font-semibold mb-8">In the news</h4>
            <div className="space-y-8">
              <div>
                <h5 className="text-xl font-semibold mb-2">Introducing more than 90 new effects in Premiere Pro.</h5>
                <p className="text-base text-muted-foreground/80 mb-4">Explore new transitions, cinematic effects, and animations.</p>
                <ArrowLink href="#" className="text-white">Read the story</ArrowLink>
              </div>
              <div>
                <h5 className="text-xl font-semibold mb-2">Bring 3D models to life with Substance 3D Reviewer.</h5>
                <p className="text-base text-muted-foreground/80 mb-4">Review files in VR and on the web, built in partnership with Meta.</p>
                <ArrowLink href="#" className="text-white">Read the story</ArrowLink>
              </div>
              <div>
                <h5 className="text-xl font-semibold mb-2">Photoshop arrives on Android.</h5>
                <p className="text-base text-muted-foreground/80 mb-4">Create where inspiration strikes with the all-new Android app.</p>
                <ArrowLink href="#" className="text-white">Read the story</ArrowLink>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}