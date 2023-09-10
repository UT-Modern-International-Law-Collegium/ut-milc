import { Loader } from "@/components/loader";

export default function Loading() {
  return (
    <div className="absolute right-1/2 top-1/4 translate-x-1/2">
      <Loader type="propagete" />
    </div>
  );
}
