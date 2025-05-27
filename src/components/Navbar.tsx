import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import React from "react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4 container">
        <Link to="/" className="flex items-center mr-6">
          <div className="text-2xl font-bold">🏛️ Культурный Навигатор</div>
        </Link>
        <NavigationMenu className="ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>О проекте</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <ListItem title="О нас" href="/">
                    Подробнее о проекте "Культурный Навигатор" и нашей миссии
                  </ListItem>
                  <ListItem title="Команда" href="/">
                    Познакомьтесь с нашей командой энтузиастов
                  </ListItem>
                  <ListItem title="Контакты" href="/">
                    Свяжитесь с нами для сотрудничества
                  </ListItem>
                  <ListItem title="Поддержать" href="/">
                    Помогите развитию проекта
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#map" className={navigationMenuTriggerStyle()}>
                Карта
              </a>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <a href="#reviews" className={navigationMenuTriggerStyle()}>
                Отзывы
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
}
