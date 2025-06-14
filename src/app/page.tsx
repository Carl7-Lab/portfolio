import { JSX } from 'react';

import { ButtonBrand } from '@/components/common/button-brand';
import { CardBrand } from '@/components/common/card-brand/card-brand';
import { CardBrandContent } from '@/components/common/card-brand/card-brand-content';
import { CardBrandFooter } from '@/components/common/card-brand/card-brand-footer';
import { CardBrandHeader } from '@/components/common/card-brand/card-brand-header';
import { LinkBrand } from '@/components/common/link-brand';
import { TextBrand } from '@/components/common/typographic/text-brand';
import { TitleBrand } from '@/components/common/typographic/title-brand';

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-8 py-16 space-y-12">
        <section className="text-center space-y-4">
          <TitleBrand variant="page" as="h1">
            Welcome to My Portfolio
          </TitleBrand>
          <TextBrand variant="lead">Built with Next.js and shadcn/ui</TextBrand>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <CardBrand variant="elevated">
            <CardBrandHeader>
              <TitleBrand variant="card" as="h2">
                About Me
              </TitleBrand>
              <TextBrand variant="small" className="mt-1">
                Get to know more about my work
              </TextBrand>
            </CardBrandHeader>
            <CardBrandContent padding="large">
              <TextBrand variant="body">
                I&apos;m a passionate developer who loves creating beautiful and
                functional web applications.
              </TextBrand>
            </CardBrandContent>
            <CardBrandFooter align="right">
              <ButtonBrand variant="primary" size="md">
                Learn More
              </ButtonBrand>
            </CardBrandFooter>
          </CardBrand>

          <CardBrand variant="elevated">
            <CardBrandHeader>
              <TitleBrand variant="card" as="h2">
                My Projects
              </TitleBrand>
              <TextBrand variant="small" className="mt-1">
                Check out my latest work
              </TextBrand>
            </CardBrandHeader>
            <CardBrandContent padding="large">
              <TextBrand variant="body">
                Explore my portfolio of projects and see what I&apos;ve been
                working on.
              </TextBrand>
            </CardBrandContent>
            <CardBrandFooter align="right">
              <ButtonBrand variant="outline" size="md">
                View Projects
              </ButtonBrand>
            </CardBrandFooter>
          </CardBrand>
        </section>

        <section className="text-center space-y-4">
          <TextBrand variant="body">
            Connect with me on{' '}
            <LinkBrand href="https://github.com" variant="accent" isExternal>
              GitHub
            </LinkBrand>{' '}
            or{' '}
            <LinkBrand href="https://linkedin.com" variant="accent" isExternal>
              LinkedIn
            </LinkBrand>
          </TextBrand>
        </section>
      </div>
    </main>
  );
}
