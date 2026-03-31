import { BreadcrumbsSkeleton } from "@/components/breadcrumbs-skeleton";
import ProductSkeleton from "./ProductsSkeleton";

export default function Loading() {
  return (
    <main className="container mx-auto p-4">
      <BreadcrumbsSkeleton />
      <ProductSkeleton />
    </main>
  );
}
