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
      <div className="max-w-5xl mx-auto">
        <div className=" p-6  text-sm border-amber-800 bg-amber-200 hover:bg-amber-200 shadow-none drop-shadow-none sm:drop-shadow-none rounded-md sm:rounded-md">
          <strong className="text-base text-amber-900">
            Dashboard Template
          </strong>
          <br />
          <div>
            Use this template as a foundation to create a dashboard for your
            project utilizing
            <code className="text-xs ml-1 font-bold text-sky-900 border-b border-b-amber-800 border-dotted">
              @dtewary/tw-polaris v{version}
            </code>
            . You can enhance and customize it further to meet your specific
            requirements.
          </div>
        </div>
        <div className="flex flex-col gap-1 justify-start items-start w-full mb-2 mt-8">
          <p className="font-semibold text-md">What every plan gets you?</p>
          {/* Features Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
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
                className="group cursor-pointer flex flex-col items-start sm:flex-row sm:items-center gap-3 p-3 bg-colorBgSurface hover:bg-gradient-to-r hover:from-gray-100 hover:to-white group  border border-colorBorder rounded-md active:shadow-shadow-button-inset active:translate-y-1 transition-all duration-100"
              >
                <div className="p-2 bg-gradient-to-r from-colorBgFillMagic to-colorBgFillEmphasis rounded-md group-active:rounded-xl group-active:shadow-shadow-inset-200 transition-all">
                  {item.icon}
                </div>
                <span className="text-sm md:text-md font-semibold text-onBackground ">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
          {plans.map((plan, index) => (
            <Card key={index} className="p-4 shadow-shadow-300 rounded-md">
              <CardHeader>
                <CardTitle className="text-font-size-750 font-semibold text-3xl">
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
                <button
                  className="group px-4 py-3 text-sm font-semibold my-2 rounded-lg bg-gradient-to-b from-neutral-800 to-neutral-800/85 hover:from-neutral-900 hover:to-neutral-900/85 border  border-neutral-900  text-neutral-100 shadow-shadow-bevel-100  active:shadow-shadow-button-primary-inset transition w-full drop-shadow"
                  onClick={plan.buttonClick}
                >
                  <p className="group-active:translate-y-[1.5px]">
                    {plan.buttonText}
                  </p>{" "}
                </button>

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

        <div className="pb-6">
          <div className="">
            <div className="relative isolate flex flex-col gap-10 overflow-hidden bg-neutral-900  px-12 py-12 shadow-2xl rounded-md sm:px-24 xl:flex-row xl:items-center xl:py-20">
              <h2 className="max-w-xl text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl xl:flex-auto">
                Want our product updates? Sign up for our newsletter.
              </h2>
              <form className="w-full max-w-md">
                <div className="flex flex-col md:flex-row gap-y-3 gap-x-4">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    autoComplete="email"
                    className="min-w-0 flex-auto rounded-md bg-neutral-500/5 px-3.5 py-2 text-base text-white outline outline-1 -outline-offset-1 outline-neutral-50/10 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-white sm:text-sm/6"
                  />
                  <Button type="submit" className="py-space-200">
                    Notify me
                  </Button>
                </div>
                <p className="mt-4 text-sm/6 text-gray-300">
                  We care about your data. Read our{" "}
                  <a
                    href="#"
                    className="font-semibold text-yellow-400 hover:underline"
                  >
                    privacy&nbsp;policy
                  </a>
                  .
                </p>
              </form>
              <svg
                viewBox="0 0 1024 1024"
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-x-1/2"
              >
                <circle
                  r={512}
                  cx={512}
                  cy={512}
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fillOpacity="0.7"
                />
                <defs>
                  <radialGradient
                    r={1}
                    cx={0}
                    cy={0}
                    id="759c1415-0410-454c-8f7c-9a820de03641"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(512 512) rotate(90) scale(512)"
                  >
                    <stop stopColor="#7775D6" />
                    <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
};

export default App;
