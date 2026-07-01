"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

function Case({ hideHeader = false }: { hideHeader?: boolean }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    let animationFrameId: number;
    let startTime: number | null = null;
    const interval = 1800; // 1800ms

    const tick = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }
      const elapsed = timestamp - startTime;

      if (elapsed >= interval) {
        api.scrollNext();
        setCurrent((prev) => prev + 1);
        startTime = timestamp;
      } else {
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [api, current]);

  return (
    <div
      className="w-full py-20 lg:py-32"
      style={{
        background: '#FFFFFF',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-10">
          {!hideHeader && (
            <>
              <h2 className="text-3xl md:text-5xl tracking-tighter font-bold text-left text-slate-900">
                Our Services
              </h2>
              <p className="text-muted-foreground -mt-6 text-left max-w-2xl text-slate-600">
                Comprehensive recruitment solutions tailored to your needs
              </p>
            </>
          )}
          <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
            <CarouselContent className="-ml-4" style={{ willChange: "transform, opacity" }}>
              {/* Card 1 */}
              <CarouselItem className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div 
                  className="flex flex-col justify-end rounded-xl aspect-[3/4] bg-cover bg-center relative overflow-hidden shadow-md group border border-slate-100"
                  style={{ backgroundImage: `url('https://res.cloudinary.com/dbpdexty8/image/upload/v1782567787/image5_tcclw7.jpg')` }}
                >
                  <div className="p-6 m-4 rounded-xl border border-white/20 shadow-sm relative overflow-hidden bg-transparent">
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.88)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', zIndex: -1 }} />
                    <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider block mb-1">01</span>
                    <h3 className="text-xl font-bold text-slate-900">Recruitment & Staffing</h3>
                    <p className="text-sm text-slate-600 mt-2 line-clamp-3">Helping companies identify and hire skilled professionals for various roles.</p>
                  </div>
                </div>
              </CarouselItem>

              {/* Card 2 */}
              <CarouselItem className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div 
                  className="flex flex-col justify-end rounded-xl aspect-[3/4] bg-cover bg-center relative overflow-hidden shadow-md group border border-slate-100"
                  style={{ backgroundImage: `url('https://res.cloudinary.com/dbpdexty8/image/upload/v1782567788/image7_o7otms.jpg')` }}
                >
                  <div className="p-6 m-4 rounded-xl border border-white/20 shadow-sm relative overflow-hidden bg-transparent">
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.88)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', zIndex: -1 }} />
                    <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider block mb-1">02</span>
                    <h3 className="text-xl font-bold text-slate-900">Job Placement Services</h3>
                    <p className="text-sm text-slate-600 mt-2 line-clamp-3">Supporting candidates in finding job opportunities that match their qualifications.</p>
                  </div>
                </div>
              </CarouselItem>

              {/* Card 3 */}
              <CarouselItem className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div 
                  className="flex flex-col justify-end rounded-xl aspect-[3/4] bg-cover bg-center relative overflow-hidden shadow-md group border border-slate-100"
                  style={{ backgroundImage: `url('https://res.cloudinary.com/dbpdexty8/image/upload/v1782567788/image4_bozjw9.jpg')` }}
                >
                  <div className="p-6 m-4 rounded-xl border border-white/20 shadow-sm relative overflow-hidden bg-transparent">
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.88)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', zIndex: -1 }} />
                    <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider block mb-1">03</span>
                    <h3 className="text-xl font-bold text-slate-900">Industry-Specific Hiring</h3>
                    <p className="text-sm text-slate-600 mt-2 line-clamp-3">Providing recruitment solutions tailored to the needs of different industries.</p>
                  </div>
                </div>
              </CarouselItem>

              {/* Card 4 */}
              <CarouselItem className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div 
                  className="flex flex-col justify-end rounded-xl aspect-[3/4] bg-cover bg-center relative overflow-hidden shadow-md group border border-slate-100"
                  style={{ backgroundImage: `url('https://res.cloudinary.com/dbpdexty8/image/upload/v1782567790/image6_bfrfak.jpg')` }}
                >
                  <div className="p-6 m-4 rounded-xl border border-white/20 shadow-sm relative overflow-hidden bg-transparent">
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.88)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', zIndex: -1 }} />
                    <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider block mb-1">04</span>
                    <h3 className="text-xl font-bold text-slate-900">End-to-End Hiring Support</h3>
                    <p className="text-sm text-slate-600 mt-2 line-clamp-3">From candidate sourcing and screening to interview coordination and final placement.</p>
                  </div>
                </div>
              </CarouselItem>

              {/* Card 5 (Duplicated Card 1) */}
              <CarouselItem className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div 
                  className="flex flex-col justify-end rounded-xl aspect-[3/4] bg-cover bg-center relative overflow-hidden shadow-md group border border-slate-100"
                  style={{ backgroundImage: `url('https://res.cloudinary.com/dbpdexty8/image/upload/v1782567787/image5_tcclw7.jpg')` }}
                >
                  <div className="p-6 m-4 rounded-xl border border-white/20 shadow-sm relative overflow-hidden bg-transparent">
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.88)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', zIndex: -1 }} />
                    <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider block mb-1">01</span>
                    <h3 className="text-xl font-bold text-slate-900">Recruitment & Staffing</h3>
                    <p className="text-sm text-slate-600 mt-2 line-clamp-3">Helping companies identify and hire skilled professionals for various roles.</p>
                  </div>
                </div>
              </CarouselItem>

              {/* Card 6 (Duplicated Card 2) */}
              <CarouselItem className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div 
                  className="flex flex-col justify-end rounded-xl aspect-[3/4] bg-cover bg-center relative overflow-hidden shadow-md group border border-slate-100"
                  style={{ backgroundImage: `url('https://res.cloudinary.com/dbpdexty8/image/upload/v1782567788/image7_o7otms.jpg')` }}
                >
                  <div className="p-6 m-4 rounded-xl border border-white/20 shadow-sm relative overflow-hidden bg-transparent">
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.88)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', zIndex: -1 }} />
                    <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider block mb-1">02</span>
                    <h3 className="text-xl font-bold text-slate-900">Job Placement Services</h3>
                    <p className="text-sm text-slate-600 mt-2 line-clamp-3">Supporting candidates in finding job opportunities that match their qualifications.</p>
                  </div>
                </div>
              </CarouselItem>

              {/* Card 7 (Duplicated Card 3) */}
              <CarouselItem className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div 
                  className="flex flex-col justify-end rounded-xl aspect-[3/4] bg-cover bg-center relative overflow-hidden shadow-md group border border-slate-100"
                  style={{ backgroundImage: `url('https://res.cloudinary.com/dbpdexty8/image/upload/v1782567788/image4_bozjw9.jpg')` }}
                >
                  <div className="p-6 m-4 rounded-xl border border-white/20 shadow-sm relative overflow-hidden bg-transparent">
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.88)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', zIndex: -1 }} />
                    <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider block mb-1">03</span>
                    <h3 className="text-xl font-bold text-slate-900">Industry-Specific Hiring</h3>
                    <p className="text-sm text-slate-600 mt-2 line-clamp-3">Providing recruitment solutions tailored to the needs of different industries.</p>
                  </div>
                </div>
              </CarouselItem>

              {/* Card 8 (Duplicated Card 4) */}
              <CarouselItem className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <div 
                  className="flex flex-col justify-end rounded-xl aspect-[3/4] bg-cover bg-center relative overflow-hidden shadow-md group border border-slate-100"
                  style={{ backgroundImage: `url('https://res.cloudinary.com/dbpdexty8/image/upload/v1782567790/image6_bfrfak.jpg')` }}
                >
                  <div className="p-6 m-4 rounded-xl border border-white/20 shadow-sm relative overflow-hidden bg-transparent">
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(255, 255, 255, 0.88)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', zIndex: -1 }} />
                    <span className="text-xs font-semibold text-sky-600 uppercase tracking-wider block mb-1">04</span>
                    <h3 className="text-xl font-bold text-slate-900">End-to-End Hiring Support</h3>
                    <p className="text-sm text-slate-600 mt-2 line-clamp-3">From candidate sourcing and screening to interview coordination and final placement.</p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export { Case };
