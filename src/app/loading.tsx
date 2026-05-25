import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-background pt-28">
      <Container>
        <Skeleton className="h-4 w-32 rounded-full" />
        <Skeleton className="mt-6 h-24 w-full max-w-xl rounded-2xl" />
        <Skeleton className="mt-6 h-16 w-full max-w-md rounded-2xl" />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Skeleton className="aspect-[4/5] w-full rounded-[2rem]" />
          <Skeleton className="hidden aspect-[4/5] w-full rounded-[2rem] lg:block" />
        </div>
      </Container>
    </div>
  );
}
