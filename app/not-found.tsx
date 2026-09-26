import Link from "next/link";
import PageHeader from "@/components/PageHeader";
export default function NotFound() {
  return (<><PageHeader title="Page not found" crumbs={[{ label: "404" }]} />
    <section className="section" style={{ textAlign: "center" }}><div className="container"><p>The page you are looking for doesn&apos;t exist or has moved.</p><Link href="/" className="btn">Back to Home</Link></div></section></>);
}
