import { useState, useCallback, ReactNode } from "react";
import {
  NavItem,
  SubItem,
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  Tooltip,
} from "@dtewary/tw-polaris";
import {
  IconHome,
  IconUsersGroup,
  IconZoomMoneyFilled,
  IconMenu2,
} from "@tabler/icons-react";

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
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
    []
  );

  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar (Desktop) */}
        <aside className="hidden lg:block w-64 bg-colorNavBg overflow-y-auto">
          <div className="w-full bg-colorBgInverse py-5 px-5 mb-8 flex justify-center items-center gap-1">
            {/* <p className="text-lg font-semibold text-colorStringBrandOnBgFill">
              Tailwind Polaris
            </p> */}
            <img
              src="https://swxgywj0g4.ufs.sh/f/91ssUGeq7QMFxBiV0PKq9KUlZvwTpbFeAXLJ73yDo2tHPcQS"
              className="h-7 w-auto"
            />
          </div>
          <nav className="px-3 space-y-1 border-r border-colorBorderInverse">
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
          <div className="bg-colorBgInverse backdrop-blur-sm h-[68px] px-6 flex items-center justify-between">
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
              <h1 className="text-lg font-semibold mx-3 text-colorStringBrandOnBgFill hidden lg:block">
                Dashboard
              </h1>
              <img
                src="https://swxgywj0g4.ufs.sh/f/91ssUGeq7QMFxBiV0PKq9KUlZvwTpbFeAXLJ73yDo2tHPcQS"
                className="h-7 w-auto inline-block lg:hidden mx-3"
              />
            </div>
            <div className="flex items-center gap-1">
              <Tooltip content="GitHub Repository" asChild>
                <Button
                  variantType="primary"
                  icon={<IconHome />}
                  onClick={() => {
                    window.open(
                      "https://github.com/DebanjanT/tailwind-polaris-dashboard",
                      "_blank"
                    );
                  }}
                >
                  Github
                </Button>
              </Tooltip>
            </div>
          </div>

          {/* Scrollable Content */}
          <main className="flex-1 w-full pt-[50px] px-5 pb-6 container mx-auto overflow-y-auto">
            {children}
          </main>
        </div>
      </div>

      {/* Sidebar Sheet for Mobile */}
      <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
        <SheetContent className="p-0">
          <SheetHeader>
            <div className="w-full bg-colorBgInverse py-3 px-5 mb-8 mt-2 flex items-center gap-1 rounded-border-radius-full">
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
