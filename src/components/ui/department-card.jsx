import * as React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const DepartmentCard = React.forwardRef(
  ({ className, imageUrl, name, icon, stats, href, themeColor, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          "--theme-color": themeColor,
        }}
        className={cn("group w-full h-full", className)}
        {...props}
      >
        <Link
          to={href}
          className="relative block w-full h-[360px] overflow-hidden shadow-sm border border-border/50 rounded-lg
                     transition-all duration-300 ease-in-out hover:shadow-md"
          aria-label={`Explore details for ${name}`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-105"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />

          {/* Themed Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, hsl(var(--theme-color) / 0.95), hsl(var(--theme-color) / 0.6) 40%, transparent 80%)`,
            }}
          />
          
          {/* Content */}
          <div className="relative flex flex-col justify-end h-full p-6 text-white">
            <div className="flex items-center gap-2 mb-2 opacity-90">
               <div className="w-8 h-8 flex items-center justify-center">
                  {icon}
               </div>
            </div>
            
            <h3 className="text-2xl font-serif font-bold tracking-tight leading-tight">
              {name}
            </h3>
            
            <p className="text-[13px] text-white/80 mt-2 font-mono tracking-wide uppercase font-semibold">{stats}</p>

            {/* Explore Button */}
            <div className="mt-6 flex items-center justify-between bg-black/20 backdrop-blur-sm border border-white/10 
                           px-4 py-3 transition-colors duration-300 group-hover:bg-black/40">
              <span className="text-sm font-semibold tracking-wide">Explore Department</span>
              <ArrowRight className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </div>
        </Link>
      </div>
    );
  }
);
DepartmentCard.displayName = "DepartmentCard";

export { DepartmentCard };
