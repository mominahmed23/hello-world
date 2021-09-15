import { useRouter } from "next/router";
import Link from "next/link";

export default function BlogDetail() {
  const router = useRouter();
  const blogId = router.query.blogId;
  return (
    <div>
      <h1>Blog details of {blogId}</h1>
    </div>
  );
}
