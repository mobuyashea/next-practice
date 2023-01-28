import Link from "next/link";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div>
        <p>這是網站首頁。</p>
        <div style={{display:"flex", flexDirection:"column"}}>
          <Link href="/newPage">新頁面</Link>
          <Link href="/posts/edit-post">Link新貼文</Link>
        </div>
      </div>
    </Layout>
  );
}
