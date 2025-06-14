'use client';

import { Mail, MapPin, Phone } from 'lucide-react';
import { JSX } from 'react';

import { TextBrand } from '@/components/common/typographic/text-brand';
import { TitleBrand } from '@/components/common/typographic/title-brand';
import { contactContent } from '@/lib/contents/contact';

const iconMap = {
  email: Mail,
  phone: Phone,
  location: MapPin,
};

export function ContactSection(): JSX.Element {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TitleBrand variant="section" as="h2" className="mb-4">
            {contactContent.title}
          </TitleBrand>
          <TextBrand
            variant="lead"
            className="mb-2 text-muted-foreground max-w-2xl mx-auto"
          >
            {contactContent.subtitle}
          </TextBrand>
        </div>
        <div className="grid lg:grid-cols-1 gap-12 max-w-3xl mx-auto justify-center">
          <div className="text-center">
            <TitleBrand
              variant="card"
              as="h3"
              className="text-2xl font-semibold mb-6"
            >
              Hablemos
            </TitleBrand>
            <TextBrand
              variant="body"
              className="text-muted-foreground mb-8 leading-relaxed"
            >
              {contactContent.description}
            </TextBrand>
            <div className="space-y-4">
              {contactContent.contactInfo.map((info, index) => {
                const Icon = iconMap[info.type as keyof typeof iconMap];
                return (
                  <div
                    key={index}
                    className="flex items-center justify-center gap-4"
                  >
                    <div className="text-primary">
                      {Icon && <Icon className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
