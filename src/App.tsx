import { useState, useCallback } from "react";
import {
  NavItem,
  SubItem,
  Button,
  Sheet,
  SheetContent,
  SheetHeader,
  useToast,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Banner,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  Tooltip,
} from "@dtewary/tw-polaris";
import {
  IconArrowRight,
  IconBasket,
  IconBox,
  IconBrandGithub,
  IconBuildingStore,
  IconChartBar,
  IconCreditCard,
  IconDeviceMobile,
  IconFlowerFilled,
  IconGrid3x3,
  IconHome,
  IconMenu2,
  IconShoppingCart,
  IconSparkles,
  IconUsersGroup,
  IconZoomMoneyFilled,
} from "@tabler/icons-react";
import classNames from "classnames";

const App = () => {
  const { addToast } = useToast();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [activeItem, setActiveItem] = useState<{
    id: string;
    parent: string;
  } | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleParentClick = useCallback((section: string): void => {
    setOpenSection((prevOpenSection) => {
      if (prevOpenSection === section) {
        setActiveItem((prevActiveItem) =>
          prevActiveItem?.parent === section ? null : prevActiveItem
        );
        return null;
      } else {
        setActiveItem((prevActiveItem) =>
          prevActiveItem && prevActiveItem.parent !== section
            ? null
            : prevActiveItem
        );
        return section;
      }
    });
  }, []);

  const plans = [
    {
      title: "Starter",
      description: "For selling on social",
      originalPrice: "₹399",
      discountedPrice: "₹149",
      features: [
        {
          icon: <IconCreditCard className="w-5 h-5 text-colorStringEmphasis" />,
          text: "5% 3rd-party payment providers",
        },
        {
          icon: (
            <IconDeviceMobile className="w-5 h-5 text-colorStringEmphasis" />
          ),
          text: "Limited online store",
        },
        {
          icon: <IconBox className="w-5 h-5 text-colorStringEmphasis" />,
          text: "2 inventory locations",
        },
        {
          icon: (
            <IconBuildingStore className="w-5 h-5 text-colorStringEmphasis" />
          ),
          text: "POS Lite",
        },
      ],
      buttonText: "Select Starter",
      buttonClick: () => {
        addToast("Can't purchase multiple plans at a same time!", "error");
      },
    },
    {
      title: "Retail",
      description: "For selling at retail stores",
      originalPrice: "₹6,220",
      discountedPrice: "₹2,999",

      banner: {
        messgage: (
          <div>
            <p>
              <strong>Card rates starting at</strong>
            </p>
            <p>2% 3rd-party payment providers</p>
          </div>
        ),
      },
      features: [
        {
          icon: <IconCreditCard className="w-5 h-5 text-colorStringEmphasis" />,
          text: "2% 3rd-party payment providers",
        },
        {
          icon: (
            <IconDeviceMobile className="w-5 h-5 text-colorStringEmphasis" />
          ),
          text: "Limited online store",
        },
        {
          icon: <IconBox className="w-5 h-5 text-colorStringEmphasis" />,
          text: "10 inventory locations",
        },
        {
          icon: (
            <IconBuildingStore className="w-5 h-5 text-colorStringEmphasis" />
          ),
          text: "Includes 1 POS Pro location",
        },
      ],
      buttonText: "Select Retail",
      buttonClick: () => {
        addToast(
          <div>
            <p>
              <strong className="flex justify-start items-center gap-1">
                <IconBasket /> Purchased
              </strong>
            </p>
            <p>Thank you for doing business with us</p>
          </div>,
          "success"
        );
      },
    },
  ];
  const [step, setStep] = useState(1);
  const stepContent = [
    {
      title: "Welcome to Tailwind Polaris",
      description:
        "Discover a powerful collection of components designed to enhance your development workflow.",
    },
    {
      title: "Customizable Components",
      description:
        "Each component is fully customizable and built with modern web standards in mind.",
    },
    {
      title: "Ready to Start?",
      description:
        "Begin building amazing interfaces with our comprehensive component library.",
    },
    {
      title: "Get Support",
      description:
        "Access our extensive documentation and community resources to make the most of TWPolaris Ui.",
    },
  ];
  const totalSteps = stepContent.length;
  const handleContinue = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };
  const handleSubItemClick = useCallback(
    (item: { id: string; parent: string }): void => {
      setActiveItem(item);
      setOpenSection(item.parent);
    },
    []
  );

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar for larger screens */}
      <aside className="hidden lg:block w-64 bg-colorNavBg h-screen overflow-y-auto">
        <div className="w-full bg-colorBgInverse  py-5 px-5 mb-8 flex justify-start items-center gap-1">
          <IconHome size={24} className="text-colorStringBrandOnBgFill" />
          <p className="text-lg font-semibold text-colorStringBrandOnBgFill">
            Tailwind Polaris
          </p>
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
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <div className="bg-colorBgInverse backdrop-blur-sm h-[68px] px-6 flex items-center justify-between">
          <div className="flex justify-start items-center">
            <Button
              variantType="default"
              className="lg:hidden"
              borderRadius="circle"
              iconOnly
              icon={<IconMenu2 />}
              onClick={() => setIsSheetOpen(true)}
            />
            <h1 className="text-lg font-semibold mx-3 text-colorStringBrandOnBgFill">
              Dashboard
            </h1>
          </div>
          <div className="flex justify-end items-center gap-1">
            <Tooltip content="Github Repository" asChild>
              <Button
                variantType="primary"
                borderRadius="circle"
                iconOnly
                icon={<IconBrandGithub />}
                className="py-space-200"
              >
                Github
              </Button>
            </Tooltip>
            <Dialog
              onOpenChange={(open) => {
                if (open) setStep(1);
              }}
            >
              <DialogTrigger asChild>
                <Button
                  variantType="primary"
                  icon={<IconFlowerFilled />}
                  borderRadius="circle"
                  className="py-space-200"
                >
                  Onboarding
                </Button>
              </DialogTrigger>
              <DialogContent className="gap-0 p-1 [&>button:last-child]:text-white">
                <div className="p-2">
                  <img
                    className="w-full md:w-[382px] h-[300px] rounded-lg"
                    src="https://swxgywj0g4.ufs.sh/f/91ssUGeq7QMFkGdO4VnFzQwM8LRiXJGOIA0KCfVjpx2ZaUql"
                  />
                </div>
                <div className="space-y-6 px-3 pb-2 pt-0">
                  <DialogHeader>
                    <DialogTitle>{stepContent[step - 1].title}</DialogTitle>
                    <DialogDescription>
                      {stepContent[step - 1].description}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div className="flex justify-center space-x-1.5 max-sm:order-1">
                      {[...Array(totalSteps)].map((_, index) => (
                        <div
                          key={index}
                          className={classNames(
                            "h-1.5 w-1.5 rounded-full bg-colorBgFillBrand",
                            index + 1 === step ? "bg-colorBg" : "opacity-20"
                          )}
                        />
                      ))}
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button type="button" variantType="tertiary">
                          Skip
                        </Button>
                      </DialogClose>
                      {step < totalSteps ? (
                        <Button
                          className="group"
                          variantType="primary"
                          type="button"
                          onClick={handleContinue}
                        >
                          Next
                          <IconArrowRight
                            className="-me-1 ms-2 opacity-60 transition-transform group-hover:translate-x-0.5"
                            size={16}
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </Button>
                      ) : (
                        <DialogClose asChild>
                          <Button type="button">Okay</Button>
                        </DialogClose>
                      )}
                    </DialogFooter>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Content Section */}
        <main className="flex-1 overflow-y-auto container px-5 mx-auto py-8">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="flex flex-col gap-1 justify-start items-start w-full">
              <p className="font-semibold text-md">What every plan gets you?</p>
              {/* Features Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                {[
                  {
                    icon: (
                      <IconShoppingCart className="w-6 h-6 text-colorStringEmphasisOnBgFill" />
                    ),
                    text: "Best-converting checkout",
                  },
                  {
                    icon: (
                      <IconBuildingStore className="w-6 h-6 text-colorStringEmphasisOnBgFill" />
                    ),
                    text: "In-person selling",
                  },
                  {
                    icon: (
                      <IconChartBar className="w-6 h-6 text-colorStringEmphasisOnBgFill" />
                    ),
                    text: "Multiple sales channels",
                  },
                  {
                    icon: (
                      <IconGrid3x3 className="w-6 h-6 text-colorStringEmphasisOnBgFill" />
                    ),
                    text: "In-depth analytics",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer flex flex-col items-start sm:flex-row sm:items-center gap-3 p-3 bg-colorBgSurface hover:bg-colorBgSurfaceHover border border-colorBorder rounded-border-radius-300 shadow-shadow-200 active:shadow-shadow-button-inset active:translate-y-1 transition-transform duration-75"
                  >
                    <div className="p-2 bg-gradient-to-r from-colorBgFillMagic to-colorBgFillEmphasis rounded-border-radius-200 group-active:shadow-shadow-inset-200">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-onBackground">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Plans */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plans.map((plan, index) => (
                <Card
                  key={index}
                  className="p-8 rounded-border-radius-400 shadow-shadow-300"
                >
                  <CardHeader>
                    <CardTitle className="text-font-size-750 font-semibold">
                      {plan.title}
                    </CardTitle>
                    <p className="text-font-size-350 text-colorStringSecondary">
                      {plan.description}
                    </p>
                  </CardHeader>

                  <CardContent>
                    <div className="text-2xl font-bold text-onBackground ">
                      <span className="line-through text-colorStringSecondary mr-2">
                        {plan.originalPrice}
                      </span>
                      <span className="text-colorStringSuccess">
                        {plan.discountedPrice}
                      </span>
                      <span className="text-sm text-onBackground">
                        {" "}
                        INR/month for first month
                      </span>
                    </div>
                    <Button
                      className="w-full mt-4 py-space-300"
                      variantType="primary"
                      onClick={plan.buttonClick}
                    >
                      {plan.buttonText}
                    </Button>

                    {plan.banner && (
                      <Banner
                        tone="success"
                        title="Join Us Today!"
                        inCard
                        icon={<IconSparkles className="w-5 h-5" />}
                        extended={true}
                        className="my-4"
                      >
                        {plan.banner.messgage}
                      </Banner>
                    )}

                    {/* Feature List */}
                    <div className="mt-4 p-3 bg-colorBgSurfaceSecondary rounded-border-radius-300">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 py-2">
                          {feature.icon}
                          <span className="text-sm text-onBackground">
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
      ;
      <Sheet open={isSheetOpen} onOpenChange={(state) => setIsSheetOpen(state)}>
        <SheetContent className=" p-0">
          <SheetHeader>
            <div className="w-full bg-colorBgInverse  py-3 px-5 mb-8 mt-2 flex justify-start items-center gap-1 rounded-border-radius-full">
              <IconHome size={24} className="text-colorStringBrandOnBgFill" />
              <p className="text-base font-semibold text-colorStringBrandOnBgFill">
                Tailwind Polaris
              </p>
            </div>
          </SheetHeader>

          <nav className="space-y-1  rounded-border-radius-300">
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
    </div>
  );
};

export default App;
