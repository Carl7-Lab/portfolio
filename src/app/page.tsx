import { JSX } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen p-8 bg-background">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">
          Welcome to My Portfolio
        </h1>
        <p className="text-center text-muted-foreground">
          Built with Next.js and shadcn/ui
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
              <CardDescription>Get to know more about my work</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                I&apos;m a passionate developer who loves creating beautiful and
                functional web applications.
              </p>
            </CardContent>
            <CardFooter>
              <Button>Learn More</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>My Projects</CardTitle>
              <CardDescription>Check out my latest work</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Explore my portfolio of projects and see what I&apos;ve been
                working on.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">View Projects</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
