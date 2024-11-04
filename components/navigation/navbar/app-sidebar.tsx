import Link from "next/link";

import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import ROUTES from "@/constants/routes";

import NavLinks from "./NavLinks";

export async function AppSidebar() {
  const session = await auth();
  return (
    <Sidebar collapsible="icon" className="sm:hidden">
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup>
          <section className="flex h-full flex-col gap-6 pt-16">
            <NavLinks />
          </section>
        </SidebarGroup>
        {!session && (
          <SidebarGroup>
            <div className="py-3">
              <Link href={ROUTES.SIGN_IN}>
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Log In</span>
                </Button>
              </Link>
            </div>

            <Link href={ROUTES.SIGN_UP}>
              <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                Sign Up
              </Button>
            </Link>
          </SidebarGroup>
        )}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
