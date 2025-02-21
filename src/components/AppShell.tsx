/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback, type ReactNode, useEffect } from "react";
import {
  NavItem,
  SubItem,
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  Avatar,
  AvatarFallback,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@dtewary/tw-polaris";
import {
  IconHome,
  IconUsersGroup,
  IconZoomMoneyFilled,
  IconMenu2,
  IconReportMoney,
  IconUser,
} from "@tabler/icons-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { LogOut } from "lucide-react";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<{
    id: string;
    parent: string;
  } | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleParentClick = useCallback((section: string): void => {
    setOpenSection((prev) => (prev === section ? null : section));
  }, []);

  const handleSubItemClick = useCallback(
    (item: { id: string; parent: string }) => {
      setActiveItem(item);
      setOpenSection(item.parent);
    },
    [],
  );

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    if (!searchParams.get("email")) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar (Desktop) */}
        <aside className="hidden lg:block w-64 bg-[#891B3F]/10 overflow-y-auto">
          <div className="w-full bg-[#891B3F] py-5 px-5 mb-9 flex justify-center items-center gap-1">
            <img
              src="https://dtewary.blr1.digitaloceanspaces.com/logo/dtewary-white-logo.png"
              alt="logo"
              className="w-[6.6rem] h-auto"
            />
          </div>
          <nav className="px-3 space-y-1 border-r border-neutral-500">
            <NavItem
              label="Marketing"
              icon={<IconUsersGroup />}
              isOpen={openSection === "marketing"}
              isActive={openSection === "marketing" && !activeItem}
              onClick={() => handleParentClick("marketing")}
            >
              <SubItem
                label="Campaigns"
                isActive={activeItem?.id === "campaigns"}
                onClick={() =>
                  handleSubItemClick({ id: "campaigns", parent: "marketing" })
                }
              />
              <SubItem
                label="Automations"
                isActive={activeItem?.id === "automations"}
                onClick={() =>
                  handleSubItemClick({ id: "automations", parent: "marketing" })
                }
              />
            </NavItem>
            <NavItem
              label="Payment"
              icon={<IconZoomMoneyFilled />}
              isOpen={openSection === "payment"}
              isActive={openSection === "payment" && !activeItem}
              onClick={() => handleParentClick("payment")}
            >
              <SubItem
                label="Add Method"
                isActive={activeItem?.id === "add-method"}
                onClick={() =>
                  handleSubItemClick({ id: "add-method", parent: "payment" })
                }
              />
              <SubItem
                label="Transactions"
                isActive={activeItem?.id === "transactions"}
                onClick={() =>
                  handleSubItemClick({ id: "transactions", parent: "payment" })
                }
              />
              <SubItem
                label="Bank Account"
                isActive={activeItem?.id === "bank-account"}
                onClick={() =>
                  handleSubItemClick({ id: "bank-account", parent: "payment" })
                }
              />
            </NavItem>
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="flex-grow flex flex-col">
          {/* Navbar */}
          <div className="bg-[#891B3F] lg:bg-white shadow-shadow-400 backdrop-blur-sm h-[68px] px-6 flex items-center justify-between">
            <div className="flex items-center justify-start">
              {/* Mobile Menu Button */}
              <Button
                variantType="default"
                className="lg:hidden"
                borderRadius="circle"
                iconOnly
                icon={<IconMenu2 />}
                onClick={() => setIsSheetOpen(true)}
              />
              <h1 className="text-xl font-bold mx-3 text-[#891B3F] hidden lg:block">
                Dashboard
              </h1>
              <img
                src="https://dtewary.blr1.digitaloceanspaces.com/logo/dtewary-white-logo.png"
                alt="logo"
                className="w-[6.6rem] h-auto ml-2 lg:hidden"
              />
            </div>
            <div className="flex items-center gap-3">
              {/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
              <div
                className="min-w-0 flex justify-center items-center gap-1 rounded-md font-semibold hover:bg-[#891B3F]/10 border border-[#891B3F]  px-3.5 py-2 text-base text-[#891B3F] outline outline-1 -outline-offset-1 outline-neutral-100/10 hover:outline-neutral-100/20 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6 cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://github.com/DebanjanT/tailwind-polaris-dashboard",
                    "_blank",
                  );
                }}
              >
                <IconHome className="w-5 h-5" strokeWidth={1.5} />
                Github
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar indicator="online">
                    <AvatarFallback className="bg-neutral-700 text-white">
                      {searchParams.get("email")
                        ? searchParams
                            .get("email")
                            ?.substring(0, 2)
                            .toLocaleUpperCase()
                        : null}
                    </AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    {" "}
                    <IconUser /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <IconReportMoney /> Billing
                  </DropdownMenuItem>

                  <DropdownMenuItem onClick={() => navigate("/")}>
                    <LogOut /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Scrollable Content */}
          <main className="flex-1 w-full pt-[50px] px-5 container mx-auto overflow-y-auto">
            {children}
          </main>
        </div>
      </div>

      {/* Sidebar Sheet for Mobile */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="p-0 bg-neutral-200">
          <SheetHeader>
            <div className="w-full bg-[#891B3F] py-3 px-5 mb-8 mt-2 flex items-center gap-1 rounded-border-radius-full">
              <IconHome size={24} className="text-colorStringBrandOnBgFill" />
              <p className="text-base font-semibold text-colorStringBrandOnBgFill">
                Tailwind Polaris
              </p>
            </div>
          </SheetHeader>

          <nav className="space-y-1 rounded-border-radius-300">
            <NavItem
              label="Marketing"
              icon={<IconUsersGroup />}
              isOpen={openSection === "marketing"}
              isActive={openSection === "marketing" && !activeItem}
              onClick={() => handleParentClick("marketing")}
            >
              <SubItem
                label="Campaigns"
                isActive={activeItem?.id === "campaigns"}
                onClick={() =>
                  handleSubItemClick({ id: "campaigns", parent: "marketing" })
                }
              />
              <SubItem
                label="Automations"
                isActive={activeItem?.id === "automations"}
                onClick={() =>
                  handleSubItemClick({ id: "automations", parent: "marketing" })
                }
              />
            </NavItem>
            <NavItem
              label="Payment"
              icon={<IconZoomMoneyFilled />}
              isOpen={openSection === "payment"}
              isActive={openSection === "payment" && !activeItem}
              onClick={() => handleParentClick("payment")}
            >
              <SubItem
                label="Add Method"
                isActive={activeItem?.id === "add-method"}
                onClick={() =>
                  handleSubItemClick({ id: "add-method", parent: "payment" })
                }
              />
              <SubItem
                label="Transactions"
                isActive={activeItem?.id === "transactions"}
                onClick={() =>
                  handleSubItemClick({ id: "transactions", parent: "payment" })
                }
              />
              <SubItem
                label="Bank Account"
                isActive={activeItem?.id === "bank-account"}
                onClick={() =>
                  handleSubItemClick({ id: "bank-account", parent: "payment" })
                }
              />
            </NavItem>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
