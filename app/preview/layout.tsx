import DesignSwitcher from "@/components/preview/DesignSwitcher";

export default function PreviewLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <DesignSwitcher />
    </>
  );
}
