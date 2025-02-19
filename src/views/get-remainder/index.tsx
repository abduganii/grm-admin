import TopSite from "@/components/top-site";

import Action from "./ui/action";
import List from "./ui/list";

export default function Page() {
  return (
    <div className="w-full">
      <TopSite />
      <div className="flex  items-start gap-[10px] p-[5px]">
        <Action />
        <List />
      </div>
    </div>
  );
}
