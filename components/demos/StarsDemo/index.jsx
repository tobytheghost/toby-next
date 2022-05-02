import dynamic from "next/dynamic";
const StarsDemo1 = dynamic(import("./StarsDemo1"), { ssr: false });
const StarsDemo2 = dynamic(import("./StarsDemo2"), { ssr: false });
const StarsDemo3 = dynamic(import("./StarsDemo3"), { ssr: false });

export { StarsDemo1, StarsDemo2, StarsDemo3 };
