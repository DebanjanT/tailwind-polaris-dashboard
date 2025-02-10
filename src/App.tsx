import {
  Button,
  useToast,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Banner,
  version,
} from "@dtewary/tw-polaris";
import {
  IconBasket,
  IconBox,
  IconBuildingStore,
  IconChartBar,
  IconCreditCard,
  IconDeviceMobile,
  IconGrid3x3,
  IconShoppingCart,
  IconSparkles,
  IconTemplate,
} from "@tabler/icons-react";
import AppShell from "./components/AppShell";

const App = () => {
  const { addToast } = useToast();

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

  return (
    <AppShell>
      <div className="max-w-5xl mx-auto space-y-8">
        <Banner
          tone="success"
          title="Join Us Today!"
          extended={false}
          icon={<IconTemplate className="w-5 h-5 flex-shrink-0 mx-4" />}
          className="p-5"
        >
          <strong>Dashboard Template</strong>
          <br />
          Use this template as a foundation to create a dashboard for your
          project utilizing
          <code className="text-xs font-semibold">
            @dtewary/tw-polaris v{version}
          </code>
          . You can enhance and customize it further to meet your specific
          requirements.
        </Banner>
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
    </AppShell>
  );
};

export default App;
