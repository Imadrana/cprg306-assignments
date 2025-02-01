import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <p>Your Name: Imad Rana</p>
      <p>
        GitHub Repository:{" "}
        <Link href="https://github.com/Imadrana?tab=repositories">
          Visit my GitHub
        </Link>
      </p>
    </div>
  );
}