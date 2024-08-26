import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { Carousel } from "@/components/carousel";

export default function Home() {

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block max-w-xl text-center justify-center">
        <h1 className={title()}>The Ultimate Token Management Tool</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Create, launch, and manage ERC20 tokens across 10+ EVM blockchains at no cost with Tokenkhana.
        </h2>
      </div>

      {/* Add Carousel in the future */}
      {/* <Carousel className="w-full my-5"/> */}

      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={"/create"}
        >
          <TbSquareRoundedPlusFilled size={20} />
          Get Started
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          Visit Github
        </Link>
      </div>
    </section>
  );
}
