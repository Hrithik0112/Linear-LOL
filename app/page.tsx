import { Container } from "@/components/container";
import { Hero, HeroSubTitle, HeroTitle } from "@/components/hero";

export default function Home() {
  return (
    <div>
      <header>
        <Container>Header</Container>
      </header>
      <main>
        <Container>
          <Hero>
            <HeroTitle>
              Linear is a better way <br /> to build products
            </HeroTitle>
            <HeroSubTitle>
              Meet the new standard for modern software development.
              <br /> Streamline issues, sprints, and product roadmaps.
            </HeroSubTitle>
            <img src="/img/Hero.webp" alt="Hero Image" />
          </Hero>
        </Container>
      </main>
      <footer>
        <Container>footer</Container>
      </footer>
    </div>
  );
}
