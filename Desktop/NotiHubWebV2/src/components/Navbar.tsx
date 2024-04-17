import { Home, Menu, Package2 } from "lucide-react";
import Link from "next/link";
import { Button } from "./shadcn/ui/Button";

import { Separator } from "./shadcn/ui/Separator";
import { Sheet, SheetTrigger } from "./shadcn/ui/Sheet";
import { SheetContent } from "./shadcn/ui/Sheet";

const Navbar = () => {
  return (
    <nav className="bg-transparent ">
      <section className="flex flex-row justify-between items-center bg-transparent sticky">
        <h1 className="font-display p-2 text-center">
          <Link href="/">NotiHub</Link>
        </h1>

        <section className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-7 w-7" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-6 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Package2 className="h-6 w-6" />
                  <span className="sr-only">Acme Inc</span>
                </Link>
                <Link href="#" className="hover:text-foreground">
                  Home
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Product
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Features
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Marketplace
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Company
                </Link>
                <Separator />

                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Login
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </section>
      </section>
    </nav>
  );
};
export default Navbar;
