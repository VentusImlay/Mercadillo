"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  ShoppingCart, 
  Menu, 
  Search,
  Store, 
  LogIn
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useAuth } from "@/lib/auth-context";
import { UserNav } from "./user-nav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Productos", href: "/productos" },
    { name: "Ofertas", href: "/ofertas" },
    { name: "Tiendas", href: "/tiendas" },
  ];

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm dark:bg-background/95" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Store className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Mercadillo</span>
            </Link>
            
            <nav className="ml-10 hidden md:flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href 
                      ? "text-primary" 
                      : "text-muted-foreground"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar productos..."
                className="pl-8 w-[200px] lg:w-[300px]"
              />
            </div>
            
            <Link href="/carrito">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            
            {user ? (
              <UserNav />
            ) : (
              <Link href="/auth/login">
                <Button variant="ghost" size="sm" className="gap-2">
                  <LogIn className="h-5 w-5" />
                  Ingresar
                </Button>
              </Link>
            )}
          </div>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 py-4">
                <Link href="/" className="flex items-center gap-2">
                  <Store className="h-6 w-6 text-primary" />
                  <span className="text-xl font-bold">Mercadillo</span>
                </Link>
                
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar productos..."
                    className="pl-8 w-full"
                  />
                </div>
                
                <nav className="flex flex-col space-y-3">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "text-sm font-medium transition-colors hover:text-primary",
                        pathname === item.href 
                          ? "text-primary" 
                          : "text-muted-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                <div className="flex flex-col space-y-3 mt-4">
                  <Link href="/carrito">
                    <Button variant="ghost" className="w-full justify-start">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Carrito
                    </Button>
                  </Link>
                  
                  {user ? (
                    <div className="pt-4">
                      <UserNav />
                    </div>
                  ) : (
                    <Link href="/auth/login">
                      <Button variant="ghost" className="w-full justify-start">
                        <LogIn className="h-5 w-5 mr-2" />
                        Ingresar
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}