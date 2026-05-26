import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-ivory pt-28">
      <Container>
        <Skeleton className="h-10 w-40 rounded-full" />
        <Skeleton className="mt-8 h-24 w-full max-w-lg rounded-3xl" />
        <Skeleton className="mt-8 aspect-[4/5] w-full max-w-md rounded-3xl" />
      </Container>
    </div>
  );
}
