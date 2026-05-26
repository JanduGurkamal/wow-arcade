import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen mesh-bg pt-24">
      <Container>
        <Skeleton className="mx-auto h-8 w-40 rounded-full" />
        <Skeleton className="mx-auto mt-6 h-20 w-full max-w-lg rounded-3xl" />
        <Skeleton className="mx-auto mt-8 aspect-[4/5] w-full max-w-sm rounded-[2rem]" />
      </Container>
    </div>
  );
}
