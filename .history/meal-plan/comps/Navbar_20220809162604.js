import Link from "next/link";

const Navbar = (props) => {
  return (
    <>
      <Link href={`"/${props.page}"`}> <a> Back </a></Link>
    </>
  );
};
export default Navbar;