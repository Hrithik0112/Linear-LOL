import { Button, IconWrapper } from "@/components/button";
import { Clients } from "@/components/clients";
import { Container } from "@/components/container";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";
import { HeroImage } from "@/components/hero-image";
import { ChevronIcon } from "@/components/icons/chevron";
import { StarsIllustration } from "@/components/icons/stars";
import classNames from "classnames";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden">
        <Container className=" py-[6.4rem]">
          <Hero>
            <Button
              className="translate-y-[-1rem] animate-fade-in opacity-0"
              href="/"
              variant="secondary"
              size="small"
            >
              Linear 2022 Release – Built for scale <IconWrapper>→</IconWrapper>
            </Button>
            <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              Linear is a better way
              <br className="hidden md:block" /> to build products
            </HeroTitle>
            <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              Meet the new standard for modern software development.
              <br className="hidden md:block" /> Streamline issues, sprints, and product roadmaps.
            </HeroSubtitle>
            <Button
              className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
              href="/"
              variant="primary"
              size="large"
            >
              Get Started{" "}
              <IconWrapper>
                <ChevronIcon />
              </IconWrapper>
            </Button>
            <HeroImage />
          </Hero>
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
      <div
        className={classNames(
          "z-[-1] mask-radial-faded pointer-events-none relative my-[-12.8rem] h-[60rem] overflow-hidden",
          "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
          "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        )}
      >
        <StarsIllustration />
      </div>
    </>
  );
}
